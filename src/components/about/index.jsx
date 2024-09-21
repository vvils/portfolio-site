import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="w-full py-20">
      <div className="grid w-full grid-cols-12 gap-4 xs:gap-6 md:gap-8">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="w-full text-xl text-left capitalize md:text-2xl">
            Full-Stack Web Developer / Software Engineer
          </h2>
          <p className="text-xs font-light sm:text-sm md:text-base ">
            Hey there, I&apos;m Wilson Weng from New York City! I&apos;m
            currently a senior at Cornell University, working towards a Computer
            Science degree. Along the way, I&apos;ve picked up a solid
            foundation in various tech fields, like web development, machine
            learning, AI, and object-oriented programming. One highlight was
            taking part in our university&apos;s hackathon - I really thrived in
            that collaborative and innovative environment.
          </p>

          <p className="text-xs font-light sm:text-sm md:text-base ">
            When it comes to programming, I&apos;m comfortable with languages
            such as Python, Java, C, and even a bit of Ocaml. Plus, I&apos;ve
            got experience with web technologies like HTML, CSS, JavaScript,
            React, and Next.js. Right now, I&apos;m super excited to find a
            software development internship where I can keep growing my skills,
            contribute to cool projects, and continue my journey as a computer
            scientist.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <img src="../culogo.png" alt="" loading="eager" />
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="flex items-center justify-center w-full gap-4 text-2xl font-semibold text-left sm:text-5xl">
            3.7 <sub className="text-lg font-semibold">GPA</sub>{" "}
            <sub className="text-2xl text-center sm:text-4xl">
              Computer Science
            </sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=vvils&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt=""
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=vvils&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=html,css,tailwind,js,ts,nodejs,react,nextjs,express,mongodb,mysql,sqlite,py,pytorch,c,cpp,java,ocaml,aws,gcp,bootstrap,d3,threejs,graphql,qt,docker,figma,git,github,vercel,vite,godot,unity,vscode,pycharm,eclipse,windows,linux,ubuntu,latex,md,materialui,postman,powershell`}
            alt=""
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=vvils&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt=""
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/vvils/portfolio-site"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=vvils&repo=portfolio-site&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt=""
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
