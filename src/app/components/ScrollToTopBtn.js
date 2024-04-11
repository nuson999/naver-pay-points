"use client";

import React from "react";
import Button from "@mui/joy/Button";

const ScrollToTopBtn = () => {
  const buttonStyle = {
    position: "fixed",
    bottom: "2rem",
    right: "2rem",
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button variant="soft" color="neutral" style={buttonStyle} onClick={handleScrollToTop}>
      ▲
    </Button>
  );
};

export default ScrollToTopBtn;
