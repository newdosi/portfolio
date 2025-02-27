import Link from "next/link";
import { Button } from "./ui/button";

const url =
  "https://elfin-tango-243.notion.site/_-6b772508cf9447ceb7629d7becc89170";

export default function HeroButtons() {
  return (
    <div className="space-x-3">
      <Link href="/projects">
        <Button className="bg-indigo-600 hover:bg-indigo-800">
          프로젝트 보러가기
        </Button>
      </Link>
      {/* <Link href={url} target="_blank">
        <Button className="bg-indigo-600 hover:bg-indigo-800">
          이력서 보러가기
        </Button>
      </Link> */}
    </div>
  );
}
