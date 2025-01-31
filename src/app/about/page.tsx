import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
import html from "../../../public/html.png";
import css from "../../../public/css.png";
import js from "../../../public/js.png";
import react from "../../../public/react.png";
import nextjs from "../../../public/nextjs.jpeg";
import tailwind from "../../../public/tailwindcss.png";
import github from "../../../public/github.png";
import vscode from "../../../public/vscode.png";
import Image from "next/image";

const page = () => {
  const skills = [
    { alt: "html", img: html },
    { alt: "css", img: css },
    { alt: "js", img: js },
    { alt: "react", img: react },
    { alt: "nextjs", img: nextjs },
    { alt: "tailwind", img: tailwind },
    { alt: "github", img: github },
    { alt: "vscode", img: vscode },
  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <User2 className="h-5 w-5" />
        About me
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>안녕하세요 웹 디자이너 {process.env.ABOUT_INTRO}</Heading>

        <FramerWrapper y={0} x={100}>
          <p className=" font-poppins py-2 text-2xl w-full text-primary max-sm:text-lg">
            {process.env.ABOUT_INTRO_DETAIL}
          </p>
        </FramerWrapper>
      </div>
      <FramerWrapper className="block" y={100} delay={0.31}>
        <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
          <Heart className="h-8 w-8" /> Skills
        </h1>
        <div>
          <p className="text-lg text-primary font-poppins py-2">
            {skills.map((skill) => skill.alt).join(", ")}
          </p>
        </div>
        <div className="flex py-4">
          {skills &&
            skills.map((val, idx) => {
              return (
                <div className="p-4" key={idx}>
                  <Image
                    src={val?.img}
                    alt={val?.alt}
                    className="rounded-full w-auto max-h-20"
                  />
                </div>
              );
            })}
        </div>
      </FramerWrapper>
    </div>
  );
};

export default page;
