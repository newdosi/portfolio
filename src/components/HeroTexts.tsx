import TextRotator from "./TextRotator";

const HeroTexts = () => {
  return (
    <>
      <h3 className="font-poppins text-2xl max-sm:text-xl">안녕하세요</h3>
      <h1 className="font-rubik text-7xl name_underline text-primary max-sm:text-6xl ">
        웹 디자이너 <br />
        {process.env.MY_NAME} 입니다
      </h1>
      <TextRotator />
      <p className="mb-8 leading-relaxed">
        저의 홈페이지에서 간단한 소개 글과 프로젝트를 확인할 수 있습니다
        <br /> 저에 대하여 궁금하시다면 아래 버튼을 클릭하여 프로젝트와 이력서를
        확인해주세요! <br />
        <span className="text-slate-600">
          *노션 페이지로 이동 시 약 3~4초 로딩 시간이 소요됩니다*
        </span>
      </p>
    </>
  );
};
export default HeroTexts;
