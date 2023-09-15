"use client";
import Button from "@/common/Button";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
import { COLLECTION_CARD_DATA, contractAddress } from "../../utils/constants";
import NftCard from "./NftCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "next/navigation";
import {
  useActiveClaimCondition,
  useActiveClaimConditionForWallet,
  useAddress,
  useClaimConditions,
  useClaimNFT,
  useContract,
  useContractRead,
} from "@thirdweb-dev/react";
import axios from "axios";

const NftDetails = () => {
  // get id from url
  const { nft } = useParams();
  const [count, setCount] = useState(1);
  const [metadata, setMetadata] = useState({
    name: "",
    description: "",
    image: "",
    external_url: "",
    background_color: "",
    attributes: [],
    customImage: "",
    customAnimationUrl: "",
  });

  const { contract } = useContract(contractAddress);
  // getting contract uri
  const { data, isLoading } = useContractRead(contract, "uri", [nft]);
  console.log("metadata-------------", metadata);
  const { activeClaimConditions, isActiveClaimConditionsLoading } =
    useActiveClaimCondition(contract);
  console.log("activeClaimConditions", activeClaimConditions);

  const address = useAddress();
  console.log("address", address);

  const { claimConditionsForWallet, isClaimConditionsForWalletLoading } =
    useActiveClaimConditionForWallet(
      contract,
      address,
      0, // Token ID required for ERC1155 contracts here.
    );

  console.log("claimConditionsForWallet", claimConditionsForWallet);
  console.log("isClaimConditionsForWalletLoading", isClaimConditionsForWalletLoading);
  const {
    data: claimConditions,
    isClaimConditionsLoading,
    error,
  } = useClaimConditions(contract, 0);
  console.log("claimConditions", claimConditions);

  const { mutate: claimNft, isClaimNftLoading, claimError } = useClaimNFT(contract);

  // fetching metadata
  useEffect(() => {
    if (!data) return;
    if (metadata.image) return;
    (async () => fetchMetaData())();
  }, [data]);

  const fetchMetaData = async () => {
    const ipfsHash = data.split("/")[2];
    const metadata = await axios.get(`https://ipfs.io/ipfs/${ipfsHash}/${nft}`);
    let imageUri = metadata.data.image.split("/");
    imageUri = `https://ipfs.io/ipfs/${imageUri?.[2]}/${imageUri?.[3]}`;
    setMetadata({
      ...metadata.data,
      image: imageUri,
    });
  };

  const handleClaim = async () => {
    try {
      const tokenId = nft; // the id of the NFT you want to claim
      const quantity = count; // how many NFTs you want to claim
      const tx = await contract.erc1155.claim(tokenId, quantity);
      const receipt = tx.receipt; // the transaction receipt
      console.log("receipt", receipt);
      if (receipt.status === 1) {
        await fetchMetaData();
        alert("Claimed Successfully");
        console.log("***************Claimed Successfully***********");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  // convert price to ether
  const convertToEther = (weiValue) => {
    if (claimConditions && claimConditions.length) {
      let etherValue = parseFloat(weiValue) / Math.pow(10, 18);
      const ether = etherValue.toFixed(18).replace(/\.?0+$/, "");
      return ether;
    }
  };

  return (
    <Fragment>
      <div className="section-margin">
        <div className="block lg:grid grid-cols-5 gap-12 items-center">
          {/* First col */}
          <div className="col-span-2">
            <img
              src={metadata?.image}
              // src="/nft-images/nfts/smoothie.svg"
              alt="nft"
              width={552}
              height={670}
              className="border border-[#D2D2D2] rounded-xl p-1"
            />
          </div>
          {/* Second col */}
          <div className="col-span-3 flex flex-col gap-6 lg:gap-10">
            <div>
              <h3 className="text-green text-2xl xl:text-5xl font-bold mt-5 lg:mt-0">
                {metadata?.name}
              </h3>
              <div className="flex items-center gap-4 mt-3 ">
                <p className="text-green text-2xl font-medium capitalize">Current Price:</p>
                <h6 className="text-gradient text-2xl font-bold uppercase">
                  {convertToEther(claimConditions?.[0]?.price.toString())} (Eth)
                  {/* {claimConditions?.length && claimConditions?.[0]?.price.toString()} */}
                </h6>
              </div>
            </div>
            <div className="bg-[#FEF9F3] border border-[#D2D2D2] p-5 lg:p-0 lg:py-12 lg:px-11 rounded-xl">
              <p className="text-[#878788] text-xl capitalize font-normal mb-7 leading-9 min-[1700px]::w-[90%]">
                {metadata?.description}
              </p>
              <div className="flex gap-5 mb-7">
                <Image src="/user.svg" alt="food suply user" width={64} height={64} />
                <div>
                  <h5 className="text-[#010101] text-xl font-medium">@Mario Mclaughlin</h5>
                  <h6 className="text-[#878788] text-base font-medium">Owner</h6>
                </div>
              </div>
              <div>
                {TOKEN_DETAILS.map((item) => (
                  <div key={item.key} className="flex gap-3 items-center">
                    <h5 className="text-[#010101] text-xl font-medium">{item.key}:</h5>
                    <p className="text-[#878788] text-lg capitalize">{item.value}</p>
                  </div>
                ))}
                <div className="flex gap-3 items-center">
                  <h5 className="text-[#010101] text-xl font-medium">Available:</h5>
                  <p className="text-[#878788] text-lg capitalize">
                    {claimConditions?.[0]?.availableSupply || "-"}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-16">
              <div className="flex  justify-between items-center border border-green rounded-lg w-[25%">
                <span
                  className="text-green text-3xl px-3 cursor-pointer"
                  onClick={() => {
                    if (count > 1) {
                      setCount(count - 1);
                    }
                  }}
                >
                  -
                </span>
                <input
                  type="number"
                  className="w-full h-10 text-center text-black text-xl font-bold outline-none"
                  value={count}
                  onChange={(e) => {
                    if (e.target.value > claimConditions?.[0]?.availableSupply) {
                      return;
                    }
                    setCount(Number(e.target.value));
                  }}
                />
                <span
                  className="text-green text-2xl px-3 cursor-pointer"
                  onClick={() => {
                    if (count < claimConditions?.[0]?.availableSupply) setCount(count + 1);
                  }}
                >
                  +
                </span>
              </div>
              <Button
                type="fill"
                className="w-[95%] flex justify-center items-center text-xl font-bold gap-4 text-white"
                onClick={handleClaim}
              >
                <Image src="/svg/cart.svg" alt="buy" width={24} height={24} />
                Buy Now (
                {(convertToEther(claimConditions?.[0]?.price.toString()) * count)
                  .toFixed(18)
                  .replace(/\.?0+$/, "")}{" "}
                Eth)
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Slider */}
      <div className="section-margin">
        <div className="flex items-center gap-5">
          <Image src="/svg/grid-icon.svg" alt="food sply nfts" width={36} height={36} />
          <h3 className="text-green text-2xl lg:text-[40px] font-bold">Related NFT</h3>
        </div>
        <div className="w-full h-[2px] bg-[#D2D2D2] mt-5 mb-14" />
        <Slider {...settings}>
          {COLLECTION_CARD_DATA.map((item, index) => (
            <NftCard key={index} image={item.img} name={item.card_heading} />
          ))}
        </Slider>
      </div>
    </Fragment>
  );
};

export default NftDetails;

const TOKEN_DETAILS = [
  {
    key: "Category",
    value: "Fruit, Food",
  },
  {
    key: "Token ID",
    value: "12344568025809852-9",
  },
];

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
