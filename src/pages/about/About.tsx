import React from "react";
import Gnb from "../../components/gnb/Gnb";
import Working from "../../components/Working/Working";
import Section from "../../components/section/Section";
import Footer from "../../components/footer/Footer";
import Seo from "../../components/seo/Seo";

const About = () => {
  return (
    <>
      <Seo
        title="About me"
        url="https://jaehyup0504.github.io/about"
        desc="저는 이런 사람입니다"
      />
      <Gnb />
      <Section>
        <Working title="About" />
      </Section>
      <Footer />
    </>
  );
};

export default About;
