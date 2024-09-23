import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLayout = ({ name, description, date, demoLink }) => {
  const hasLink = demoLink === "#" ? undefined : demoLink;
  return (
    <motion.div
      variants={item}
      className="relative flex flex-col items-center justify-between w-full gap-4 p-4 overflow-hidden text-sm rounded-lg md:text-base md:p-6 custom-bg"
    >
      <div className="flex items-center justify-between w-full ">
        <h2 className="text-xl font-bold text-foreground">{name}</h2>
        <p className="text-muted sm:text-foreground">{date}</p>
      </div>
      <p className="hidden text-gray-400 sm:inline-block">{description}</p>
      <div className="flex justify-end w-full">
        {hasLink ? (
          <Link
            className="px-4 py-2 border rounded-lg custom-bg "
            href={demoLink}
            target="_blank"
          >
            Demo
          </Link>
        ) : (
          <button className="px-4 py-2 text-gray-500 border border-solid rounded-lg border-accent/30 ">
            Demo Unavailable
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectLayout;
