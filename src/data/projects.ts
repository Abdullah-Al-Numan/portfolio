import { ProjectCardProps } from "@/components/ProjectCard";
import { siteMetadata } from "@/data/siteMetaData.mjs";


export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Akij fair value",
    favicon: "/images/projects/FairValueIcon.webp",
    imageUrl: [
      "/images/projects/FairValueLight.png",
      "/images/projects/FairValueDark.png",
    ],
    description:
      "Using a versatile tech stack including Next.js, Recoil.js, Styled Component, Tailwind CSS, and more, I played a key role in developing Fair Value Ltd—an online shopping platform for Akij Venture Group. My responsibilities covered both front-end and back-end tasks, including creating authentication systems, product listings, cart management, payment systems, and admin dashboards. Additionally, I implemented delivery tracking and inventory management features.",
    liveWebsiteHref: "https://www.akijfairvalue.com/",
  },
  {
    name: "Akij Venture",
    favicon: "/images/projects/AkijVentureIcon.webp",
    imageUrl: [
      "/images/projects/AkijVenture.png",
    ],
    description:"Employing technologies like Next.js, Styled Component, Tailwind CSS, and other NPM packages, I spearheaded the development of the Akij Venture website. My primary responsibilities revolved around front-end development, including crafting intuitive user interfaces and designing the sanity.io schema to ensure seamless content management. I also implemented the website’s responsive design and optimized its performance.",
    liveWebsiteHref: "https://www.akijventure.com/",
  },
  {
    name: "Akij Food & Beverage",
    favicon: "/images/projects/AkijFoodandBeverageIcon.webp",
    imageUrl: [
      "/images/projects/AkijFoodandBeverage.png",
    ],
    description:"Using Next.js, Styled Component, Tailwind CSS, Sanity.io, and other NPM packages, I led the development of the Akij Food & Beverage website. My primary role encompassed front-end development, concentrating on creating captivating user interfaces and designing the sanity.io schema to streamline content management.",
    liveWebsiteHref: "https://www.akijfood.com/",
  },
  {
    name: "Akij Bicycle",
    favicon: "/images/projects/AkijBicycleIcon.webp",
    imageUrl: [
      "/images/projects/AkijBicycle.png",
    ],
    description:"Utilizing Next.js, Redux Toolkit, Styled Component, Tailwind CSS, Sanity.io, Node.js, Express.js, Mongoose, MongoDB, and various NPM packages, I made significant contributions to the web application for Akij Bicycle. My primary focus was on front-end development, alongside designing the sanity.io schema for efficient content management. Additionally, I developed critical authentication modules such as dealer, admin, and reviewer functionalities, ensuring seamless user experiences across the platform.",
    liveWebsiteHref: "https://www.akijbicycle.com/",
  },
  {
    name: "Akij Electricals",
    favicon: "/images/projects/AkijElectricalsIcon.svg",
    imageUrl: [
      "/images/projects/AkijElectricals.png",
    ],
    description: "Using Next.js, Styled Component, Tailwind CSS, Sanity.io, and various other NPM packages, I spearheaded the development of the Akij Electricals website. My primary responsibility centered around front-end development, emphasizing intuitive user interface design and crafting the sanity.io schema to streamline content management.",
    liveWebsiteHref: "https://www.akijee.com/",
  },
  {
    name: "Ampublication",
    favicon: "/images/projects/AmpublicationIcon.svg",
    imageUrl: [
      "/images/projects/Ampublication.png",
    ],
    description: "Utilizing Next.js, Redux Toolkit, Styled Component, Tailwind CSS, Sanity.io, Node.js, Express.js, Mongoose, MongoDB, and various other NPM packages, I played a significant role in the development of the Ampublication web application. My primary focus was on front-end development and designing the sanity.io schema for efficient content management. Additionally, I developed critical authentication modules and key features such as admin quiz game creation and participant quiz game play, ensuring engaging user experiences throughout the platform.",
    liveWebsiteHref: "https://www.ampublication.com/",
  },
];
