import React from "react";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { BlogLogo } from "../../assets";

const Gnb = () => {
  let navigate = useNavigate();

  const handleClick = (url: string) => {
    navigate(url);
  };

  return (
    <GnbDiv>
      <Box>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img width={23} height={23} src={BlogLogo} alt="블로그 로고" />
          <Font
            style={{
              paddingLeft: 12,
            }}
            onClick={() => handleClick("/")}
          >
            Jae Hyup Blog
          </Font>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Font onClick={() => handleClick("/about")}>About</Font>
          <Font onClick={() => handleClick("/")}>Posts</Font>
        </div>
      </Box>
    </GnbDiv>
  );
};

export default Gnb;

const GnbDiv = styled("div")({
  background: "#fff",
  width: "100%",
  height: 70,
  position: "fixed",
  top: 0,
});

const Box = styled("div")({
  height: 70,
  maxWidth: 1140,
  margin: "10px auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Font = styled("div")({
  fontSize: 22,
  fontWeight: 700,
  padding: "10px 20px",
  cursor: "pointer",
});
