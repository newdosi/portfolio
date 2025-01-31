"use client";

import React from "react";
import Lottie from "react-lottie-player";
import animationData from "../../../public/animation.json";

export default function LottieImage() {
  return (
    <Lottie
      loop
      animationData={animationData}
      play
      style={{ width: "100%", height: "100%" }}
    />
  );
}
