import React from "react";
import { styled } from "@mui/system";

const Footer = () => {
  return (
    <FooterDiv>
      <Box>Copyright © JaeHyup 2024</Box>
    </FooterDiv>
  );
};

export default Footer;

const FooterDiv = styled("div")({
  width: "100%",
  height: 150,
  position: "fixed",
  bottom: 0,
});

const Box = styled("div")({
  maxWidth: 1140,
  height: "100%",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
