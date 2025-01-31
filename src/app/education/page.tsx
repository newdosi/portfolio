import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

// 학력 데이터 배열
const educationData = [
  {
    period: "2022.04 - 2022.10",
    institution: "코드스테이츠 (Code States)",
    course: "소프트웨어 엔지니어링 부트캠프 프론트엔드 (39기 수료)",
    description:
      "Javascript 기반의 프론트엔드 과정을 학습하였으며, React를 활용한 협업 프로젝트를 통해 부족한 웹 개발 경험을 쌓고 커뮤니케이션 능력을 향상시켰습니다.",
  },
  {
    period: "2019.03 - 2022.02",
    institution: "동양미래대학교",
    course: "컴퓨터공학 컴퓨터소프트웨어공학 전공",
    description:
      " 저는 자료구조, 알고리즘, 데이터베이스 등의 컴퓨터 공학 기초를 학습하였으며, 다양한 환경에서 소프트웨어를 개발할 수 있는 소프트웨어 실무 중심 교육과정을 이수하였습니다. 웹 개발에 관심이 많아 웹 프로젝트실습, 자바 실무 프로젝트, 데이터베이스 관리 등의 웹 관련 강의를 주로 공부하였습니다.",
  },
  {
    period: "2017.03 - 2019.02",
    institution: "한국폴리텍 I 대학 서울정수캠퍼스 ",
    course: "시각디자인과 전공",
    description:
      " 저는 Photoshop, illustrator를 활용한 편집 디자인, 그래픽 디자인 교육을 이수하였으며, 심화과정으로 웹디자인과 관련한 UI/UX 디자인, 반응형웹개발 기초 등의 교육을 이수하였습니다.",
  },
];

const EducationPage = () => {
  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className="gap-2">
        <Briefcase className="h-5 w-5" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>학력 및 교육</Heading>
      </div>

      <div className="w-full h-fit flex flex-col">
        {educationData.map((edu, idx) => (
          <div key={idx} className="w-full h-fit flex">
            <FramerWrapper
              y={0}
              x={-100}
              delay={0.35}
              className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base"
            >
              {edu.period}
            </FramerWrapper>
            <FramerWrapper
              y={0}
              x={100}
              delay={0.35}
              className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point"
            >
              <div className="text-2xl font-bold max-sm:text-xl">
                {edu.institution} <br /> {edu.course}
              </div>
              <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
                {edu.description}
              </p>
            </FramerWrapper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationPage;
