import React from "react";

interface Props {
  title: string;
}

const Working = ({ title }: Props) => {
  return (
    <div
      style={{
        width: 1140,
        height: 400,
        borderRadius: 10,
        border: "1px dashed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: 30,
          fontWeight: 500,
        }}
      >
        {title} 페이지 작업 중입니다 🔥
      </div>
    </div>
  );
};

export default Working;
