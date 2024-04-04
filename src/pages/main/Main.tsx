import React from "react";
import Gnb from "../../components/gnb/Gnb";
import Footer from "../../components/footer/Footer";
import Section from "../../components/section/Section";
import Working from "../../components/Working/Working";
import Seo from "../../components/seo/Seo";

const Main = () => {
  return (
    <>
      <Seo
        title="Jae Hyup Blog"
        url="https://jaehyup0504.github.io"
        desc="Jae Hyup Blog에 오신걸 환영합니다."
      />
      <Gnb />
      <Section>
        <Working title="Main" />
      </Section>
      <Footer />
    </>
  );
};

export default Main;
