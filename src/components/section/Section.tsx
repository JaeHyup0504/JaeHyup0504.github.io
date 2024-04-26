import React, { ReactNode } from "react";
import { styled } from "@mui/system";

interface Prop {
  children: ReactNode;
}

const Section = ({ children }: Prop) => {
  return <SectionDiv>{children}</SectionDiv>;
};

export default Section;

const SectionDiv = styled("div")({
  marginTop: 70,
  minHeight: "calc(100vh - 190px)",
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
});
