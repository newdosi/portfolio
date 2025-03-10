"use client";
import { useState } from "react"; // useState 추가
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";
import project1 from "../../../public/project1_cover.jpg";
import project2 from "../../../public/project2_cover.png";

const ProjectsPage = () => {
  const [selectedRole, setSelectedRole] = useState("all"); // 선택된 role 상태

  const Projects = [
    {
      cover: project1,
      role: "logo design",
      title: "소프트웨이(주) BI/Logo제작",
      description:
        "신규 로고 제작. 회사의 브랜드 아이덴티티를 강화하고, 핵심 가치를 시각적으로 표현하는 데 중점을 두고 제작한 로고 디자인입니다.",
      tags: ["Illustrator", "Figma"],
      link: "https://elfin-tango-243.notion.site/BI-Logo-1a7fc34aaf8b80a78438c049718cf0d9?pvs=4",
    },
    // {
    //   role: "app design",
    //   title: "ThingsFinder: 쉽고 간편한 물건 관리",
    //   description:
    //     "잃어버린 물건을 찾느라 고생한 적 있나요? ThingsFinder는 AI와 대화를 통해 내 물건을 저장하는 앱 입니다. 물건의 위치를 기록하여 필요할 때 알려주는 나만의 AI 보관 도우미입니다.",
    //   tags: ["Figma", "lottie", "illustlator"],
    //   link: "https://elfin-tango-243.notion.site/ThingsFinder-733b874e051243639b4fd2156d66e11f",
    // },
    {
      cover: project2,
      role: "frontend",
      title: "함께TODO: 목표를 달성하고 함께 공유하는 '목표+할일' 관리 서비스 ",
      description: `부트캠프 ‘코드스테이츠’에서 진행한 메인 팀 프로젝트로, 기존 투두 서비스를 응용하여 일기 형태의 타임라인을 작성하여 사용자들과 공유하는 커뮤니티 형식의 목표 관리 서비스입니다.`,
      tags: ["React", "Javascript", "Styled-Component", "Redux"],
      link: "https://elfin-tango-243.notion.site/TODO-b7a93bee91f04b138b66162194dc98b3",
    },
  ];

  // role을 기준으로 프로젝트 필터링
  const filteredProjects =
    selectedRole === "all"
      ? Projects
      : Projects.filter((project) => project.role === selectedRole);

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className="gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>나의 프로젝트</Heading>
        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-lg w-full text-primary max-sm:text-base">
            이곳에서 저의 프로젝트를 확인할 수 있습니다. 내용을 클릭하면
            프로젝트 깃허브 레파지토리 및 노션 페이지로 이동합니다.
          </p>
        </FramerWrapper>
      </div>

      {/* Role 선택 버튼 */}
      <div className="flex gap-4 mb-5">
        {["all", "web design", "app design", "logo design", "frontend"].map(
          (role) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedRole === role
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {role === "all" ? "전체" : role}
            </button>
          )
        )}
      </div>

      <div className="w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {filteredProjects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
