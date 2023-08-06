"use client";

import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { PlusIcon, MinusIcon } from "../../public";
import { Zoom } from "react-awesome-reveal";

export default function CustomAccordion({ data }) {
  const [expanded, setExpanded] = React.useState(data[0].slug || "panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="flex flex-col items-center">
      {data?.map((item) => (
        <Zoom triggerOnce>
          <Accordion
            key={item.id}
            expanded={expanded === item.slug}
            onChange={handleChange(item.slug)}
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              width: "650px",
              border: "none",
              padding: "20px 0",
              "&:before": {
                backgroundColor: "#F7941D",
              },
              // small devices
              "@media (max-width: 768px)": {
                width: "100%",
                padding: "6px 0",
              },
            }}
          >
            <AccordionSummary
              expandIcon={expanded === item.slug ? <MinusIcon /> : <PlusIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <Typography
                sx={{
                  color: "#101828",
                  fontSize: "20px",
                  fontWeight: "700",
                  "@media (max-width: 768px)": {
                    fontSize: "14px",
                  },
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#667085",
                  width: "90%",
                  "@media (max-width: 768px)": {
                    fontSize: "12px",
                  },
                }}
              >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Zoom>
      ))}
    </div>
  );
}
