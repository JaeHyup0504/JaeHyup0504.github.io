import React from "react";
import Gnb from "../../components/gnb/Gnb";
import Footer from "../../components/footer/Footer";
import Section from "../../components/section/Section";
import Seo from "../../components/seo/Seo";
import PostCard from "../../components/postCard/PostCard";
import { Box, Grid } from "@mui/material";

const Main = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <Seo
        title="Jae Hyup Blog"
        url="https://jaehyup0504.github.io"
        desc="Jae Hyup Blog에 오신걸 환영합니다."
      />
      <Gnb />
      <Section>
        <Box width={1140}>
          <Grid container spacing={3}>
            {arr.map((_, idx) => (
              <Grid xs={3} item key={idx}>
                <PostCard />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Section>
      <Footer />
    </>
  );
};

export default Main;
