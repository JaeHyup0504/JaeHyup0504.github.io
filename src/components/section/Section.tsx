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
  height: "calc(100vh - 50px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
