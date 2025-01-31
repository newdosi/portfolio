import HeroButtons from "@/components/HeroButtons";
import HeroTexts from "@/components/HeroTexts";
import FramerWrapper from "@/components/animation/FramerWrapper";
import LottieImage from "@/components/animation/LottieImage";

export const siteConfig = {
  name: "kimsira",
  description: "I am a Web Designer",
};
export default function Home() {
  return (
    <>
      {/* LEFT SIDE */}
      <FramerWrapper
        className=" h-full w-auto flex flex-col justify-start gap-4"
        y={0}
        x={-100}
      >
        <HeroTexts />
        <HeroButtons />
      </FramerWrapper>

      {/* RIGHT SIDE */}
      <FramerWrapper
        className="h-full w-[47%] relative block max-lg:hidden"
        y={0}
        x={100}
      >
        <LottieImage />
      </FramerWrapper>
    </>
  );
}
