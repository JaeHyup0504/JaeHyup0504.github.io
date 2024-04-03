import React from "react";

interface CardProps {
  title: string;
  subTitle: string;
  img: string;
  date: string;
}

const PostCard = ({ title, subTitle, img, date }: CardProps) => {
  return <div>PostCard</div>;
};

export default PostCard;
