"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./slideDownMenu.module.css";
import logo from "../../../public/logo-sm.svg";

const SlideDownMenu = ({ menu, callback }) => {
  const pathname = usePathname();
  return (
    <div className={styles.menu}>
      <div className={styles.crossIcon}>
        <div>
          <Image src={logo} alt="food sply" />
        </div>
        <span onClick={() => callback && callback(false)}>x</span>
      </div>
      <div className="flex-1 flex flex-col mt-5">
        {menu?.map((item) => (
          <Link
            key={item.url}
            href={item.url}
            onClick={() => callback && callback(false)}
            className={`${styles.menuLink} ${
              pathname == item.url ? "text-primaryColor" : "text-secondaryColor"
            } `}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SlideDownMenu;
