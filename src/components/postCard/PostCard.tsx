import React from "react";
import { useNavigate } from "react-router-dom";

interface CardProps {
  title?: string;
  subTitle?: string;
  img?: string;
  date?: string;
}

const PostCard = ({ title, subTitle, img, date }: CardProps) => {
  let navigate = useNavigate();

  return (
    <div
      style={{
        width: 230,
        height: 230,
        borderRadius: 10,
        border: "1px dashed",
        padding: 20,
        cursor: "pointer",
      }}
      onClick={() => navigate("/posts")}
    ></div>
  );
};

export default PostCard;
