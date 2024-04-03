import React from "react";
import Gnb from "../../components/gnb/Gnb";
import Footer from "../../components/footer/Footer";
import Section from "../../components/section/Section";
import Working from "../../components/Working/Working";

const Main = () => {
  return (
    <>
      <Gnb />
      <Section>
        <Working title="Main" />
      </Section>
      <Footer />
    </>
  );
};

export default Main;
