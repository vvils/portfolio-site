import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);
const ProjectLayout = ({ name, description, date, demoLink }) => {
  return (
    <ProjectLink
      variants={item}
      href={demoLink}
      className="relative flex flex-col items-center justify-between w-full gap-4 p-4 overflow-hidden text-sm rounded-lg md:text-base md:p-6 custom-bg"
    >
      <div className="flex items-center justify-between w-full ">
        <h2 className="text-foreground">{name}</h2>
        <p className="text-muted sm:text-foreground">{date}</p>
      </div>
      <p className="hidden text-gray-400 sm:inline-block">{description}</p>
    </ProjectLink>
  );
};

export default ProjectLayout;
