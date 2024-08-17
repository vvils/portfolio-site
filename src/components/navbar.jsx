"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import NavLink from "./navLink";
import { motion } from "framer-motion";
const links = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/about",
    title: "About",
  },
  {
    url: "/portfolio",
    title: "Portfolio",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];

const topVarients = {
  closed: { rotate: 0 },
  opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" },
};
const centerVarients = { closed: { opacity: 1 }, opened: { opacity: 0 } };
const bottomVarients = {
  closed: { rotate: 0 },
  opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" },
};
const listVarients = {
  closed: { x: "100vw" },
  opened: {
    x: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.2 },
  },
};
const listItemVarients = {
  closed: { opacity: 0, x: -10 },
  opened: { opacity: 1, x: 0 },
};
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between h-full px-4 text-xl sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* link panel */}
      <div className="hidden w-1/3 gap-4 md:flex">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* logo */}
      <div className="xl:justify-center xl:w-1/3 md:hidden lg:flex">
        <Link
          href="/"
          className="flex items-center justify-center p-1 text-sm font-semibold bg-black rounded-md"
        >
          <span className="mr-1 text-white">Wils</span>
          <span className="flex items-center justify-center w-12 h-8 text-black bg-white rounded">
            .dev
          </span>
        </Link>
      </div>
      {/* icons */}
      <div className="hidden w-1/3 gap-4 md:flex md:justify-center">
        <Link href={"https://www.linkedin.com/in/wilsweng/"}>
          <Image
            src={"/portfolio-site/github.png"}
            alt=""
            width={24}
            height={24}
          />
        </Link>
        {/* <Link href={"/"}>
          <Image
            src={"/portfolio-site/dribbble.png"}
            alt=""
            width={24}
            height={24}
          />
        </Link>
        <Link href={"/"}>
          <Image
            src={"/portfolio-site/instagram.png"}
            alt=""
            width={24}
            height={24}
          />
        </Link>
        <Link href={"/"}>
          <Image
            src={"/portfolio-site/facebook.png"}
            alt=""
            width={24}
            height={24}
          />
        </Link>
        <Link href={"/"}>
          <Image
            src={"/portfolio-site/pinterest.png"}
            alt=""
            width={24}
            height={24}
          />
        </Link> */}
        <Link href={"https://github.com/vvils?tab=repositories"}>
          <Image
            src={"/portfolio-site/linkedin.png"}
            alt=""
            width={24}
            height={24}
          />
        </Link>
      </div>

      {/* menu */}
      <div className="md:hidden">
        <button
          className="relative z-50 flex flex-col justify-between w-10 h-8"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVarients}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 origin-left bg-black rounded"
          ></motion.div>
          <motion.div
            variants={centerVarients}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVarients}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 origin-left bg-black rounded"
          ></motion.div>
        </button>
        {/* menu items */}
        {open && (
          <motion.div
            variants={listVarients}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 z-40 flex flex-col items-center justify-center w-screen h-screen gap-8 text-4xl text-white bg-black"
          >
            {links.map((link) => (
              <motion.div variants={listItemVarients} key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
