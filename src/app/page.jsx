"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const Homepage = () => {
  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col h-full px-4 lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* img */}
        <div className="relative h-1/2 lg:h-full lg:w-1/2">
          <Image
            src={"/portfolio-site/hero2.png"}
            alt=""
            fill
            className="object-contain"
          />
          {/* <Image src={"/hero.png"} alt="" fill className="object-contain" /> */}
        </div>
        {/* text */}
        <div className="flex flex-col items-center justify-center gap-8 h-1/2 lg:h-full lg:w-1/2">
          {/* title */}
          <h1 className="text-4xl font-bold md:text-6xl">
            Building Seamless Web Experiences from Front to Back
          </h1>
          {/* desc */}
          <p className="md:text-xl">
            Welcome to my portfolio! Here, you will find a showcase of my work
            as a full stack developer, where creativity meets code. Explore my
            projects and see how I transform ideas into dynamic, user-friendly
            digital experiences.
          </p>
          {/* buttons */}
          <div className="flex w-full gap-4">
            <button className="p-4 text-white bg-black rounded-lg ring-1 ring-black ">
              <Link href="/portfolio">View My Work</Link>
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black ">
              <Link href="/contact">Contact Me</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
