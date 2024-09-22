import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
// import Staff from "@/components/models/Staff";
import dynamic from "next/dynamic";

const Staff = dynamic(() => import("@/components/models/Staff"), {
  ssr: false,
});

export const metadata = {
  title: "Projects",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's about page background image"
        className="fixed top-0 left-0 object-cover object-center w-full h-full opacity-50 -z-50"
        priority
        sizes="100vw"
      />

      <ProjectList projects={projectsData} />

      <div className="fixed flex flex-row items-center justify-between w-screen h-screen mx-0 top-16 lg:top-20 -z-10 ">
        <div className="w-1/2 h-full -translate-x-1/3">
          <RenderModel>
            <Staff />
          </RenderModel>
        </div>
        <div className="w-1/2 h-full translate-x-1/3">
          <RenderModel>
            <Staff />
          </RenderModel>
        </div>
      </div>
    </>
  );
}
