import React from "react";
import Gnb from "../../components/gnb/Gnb";
import Working from "../../components/Working/Working";
import Section from "../../components/section/Section";
import Footer from "../../components/footer/Footer";

const Post = () => {
  return (
    <>
      <Gnb />
      <Section>
        <Working title="Posts" />
      </Section>
      <Footer />
    </>
  );
};

export default Post;
