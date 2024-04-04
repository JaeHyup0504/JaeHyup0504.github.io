import React from "react";
import Gnb from "../../components/gnb/Gnb";
import Working from "../../components/Working/Working";
import Section from "../../components/section/Section";
import Footer from "../../components/footer/Footer";
import Seo from "../../components/seo/Seo";

const Post = () => {
  return (
    <>
      <Seo
        title="About me"
        url="https://jaehyup0504.github.io/posts"
        desc="기록 저장소"
      />
      <Gnb />
      <Section>
        <Working title="Posts" />
      </Section>
      <Footer />
    </>
  );
};

export default Post;
