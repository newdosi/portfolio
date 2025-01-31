"use client";

import React from "react";
import dynamic from "next/dynamic";

// 클라이언트 사이드에서만 로딩하도록 설정
const LottiePlayer = dynamic(() => import("react-lottie-player"), {
  ssr: false,
});
import animationData from "../../../public/animation.json";

export default function LottieImage() {
  return (
    <LottiePlayer
      loop
      animationData={animationData}
      play
      style={{ width: "100%", height: "100%" }}
    />
  );
}
