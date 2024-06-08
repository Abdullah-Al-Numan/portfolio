import Image from "next/image";
import {
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiNextdotjs,
  SiNestjs,
  SiStyledcomponents,
} from "react-icons/si";
import {
  FramerMotionIcon,
  GithubIcon,
  ReactRouterDomIcon,
} from "@/components/Icons";
import { SkillPillProps } from "@/components/Skills";

export const LANGUAGES: SkillPillProps[] = [
  {
    name: "HTML",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="html logo" src="/icons/html.svg" fill />
      </span>
    ),
  },
  {
    name: "CSS",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="css logo" src="/icons/css.svg" fill />
      </span>
    ),
  },
  {
    name: "Javascript",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="javascript logo" src="/icons/javascript.svg" fill />
      </span>
    ),
  },
  {
    name: "Typescript",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="typescript logo" src="/icons/typescript.svg" fill />
      </span>
    ),
  },
  {
    name: "C",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="python logo" src="/icons/c.png" fill />
      </span>
    ),
  },
  {
    name: "C++",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="python logo" src="/icons/c++.svg" fill />
      </span>
    ),
  },
  {
    name: "C#",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="c# logo" src="/icons/csharp.svg" fill />
      </span>
    ),
  },
  {
    name: "Java",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="java logo" src="/icons/java.svg" fill />
      </span>
    ),
  },
  {
    name: "Python",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="python logo" src="/icons/python.svg" fill />
      </span>
    ),
  },
  {
    name: "PHP",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="php logo" src="/icons/php.png" fill />
      </span>
    ),
  }
];

export const LIBRARY_FRAMEWORK: SkillPillProps[] = [
  {
    name: "Reactjs",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="reactjs logo" src="/icons/reactjs.svg" fill />
      </span>
    ),
  },
  {
    name: "React Native",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="reactjs logo" src="/icons/reactjs.svg" fill />
      </span>
    ),
  },
  {
    name: "Nextjs",
    icon: <SiNextdotjs className="h-5 w-5 sm:h-8 sm:w-8" />,
  },
  {
    name: "React-router-dom",
    icon: <ReactRouterDomIcon className="h-5 w-5 sm:h-8 sm:w-8" />,
  },
  {
    name: "Redux",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="redux logo" src="/icons/redux.svg" fill />
      </span>
    ),
  },
  {
    name: "Styled-components",
    icon: <SiStyledcomponents className="h-5 w-5 sm:h-8 sm:w-8" />,
  },
  {
    name: "Tailwindcss",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="tailwindcss logo" src="/icons/tailwindcss.svg" fill />
      </span>
    ),
  },
  {
    name: "MUI",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="mui logo" src="/icons/mui.svg" fill />
      </span>
    ),
  },
  {
    name: "Framer motion",
    icon: <FramerMotionIcon className="h-5 w-5 sm:h-8 sm:w-8" />,
  }
];

export const BACKEND_PILL: SkillPillProps[] = [
  {
    name: "Nodejs",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="nodejs logo" src="/icons/nodejs.svg" fill />
      </span>
    ),
  },
  {
    name: "Express",
    icon: <SiExpress className="h-5 w-5 sm:h-8 sm:w-8" />,
  },
  {
    name: "Nestjs",
    icon: <SiNestjs className="h-5 w-5 sm:h-8 sm:w-8" />,
  },
  {
    name: "Socket.io",
    icon: <SiSocketdotio className="h-5 w-5 sm:h-8 sm:w-8" />,
  },
];

export const DATABASE_ORM_PILL: SkillPillProps[] = [
  {
    name: "MongoDB",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="mongodb logo" src="/icons/mongodb.svg" fill />
      </span>
    ),
  },
  {
    name: "MySQL",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="mysql logo" src="/icons/mysql.svg" fill />
      </span>
    ),
  },
  {
    name: "Mongoose",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="mongoose logo" src="/icons/mongoose.svg" fill />
      </span>
    ),
  },
  {
    name: "TypeORM",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="typeorm logo" src="/icons/typeorm.svg" fill />
      </span>
    ),
  },
  {
    name: "Prisma",
    icon: (
      <SiPrisma className="h-5 w-5 fill-[#2d3748] dark:fill-zinc-100 sm:h-8 sm:w-8" />
    ),
  },
];

export const TOOLS_TECHNOLOGIES: SkillPillProps[] = [
  {
    name: "Git",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="git logo" src="/icons/git.svg" fill />
      </span>
    ),
  },
  {
    name: "Github",
    icon: <GithubIcon className="h-5 w-5 sm:h-8 sm:w-8" />,
  },
  {
    name: "Docker",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="docker logo" src="/icons/docker.svg" fill />
      </span>
    ),
  },
  {
    name: "Postman",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="postman logo" src="/icons/postman.svg" fill />
      </span>
    ),
  },
  {
    name: "Vscode",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="vscode logo" src="/icons/vscode.svg" fill />
      </span>
    ),
  },
];
