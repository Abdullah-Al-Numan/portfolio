import dynamic from "next/dynamic";
import Head from "next/head";
import { NextSeo } from "next-seo";
import CursorTrailCanvas from "@/components/CursorTrailCanvas";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import About from "../components/About";
import ShowCaseList from "@/components/ShowCaseList";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import Project from "@/components/Project";

const Skills = dynamic(() => import("@/components/Skills"), { ssr: true });

export default function Home() {
  return (
    <>
      <CursorTrailCanvas
        color="hsla(183, 64%, 27%, 0.4)"
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      />
      <NextSeo
        title="Abdullah Al Numan | Full Stack Developer"
        description="Explore the professional portfolio of Abdullah Al Numan, a skilled Full Stack  Developer with 1 years plus of hands-on experience. Discover innovative projects, expertise in modern web technologies, and a passion for creating seamless user experiences."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Abdullah Al Numan - Full Stack Developer Portfolio",
          description:
            "Dive into the world of web development with Abdullah Al Numan. Discover a Full Stack Developer with 1 years plus of expertise, showcasing cutting-edge projects and a commitment to crafting exceptional user interfaces.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Abdullah Al Numan - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "React Developer, Next.js Developer, Frontend Developer, Web Developer, JavaScript, TypeScript, HTML, CSS, Portfolio, Express.js, Nest.js, MongoDB, MySQL, Databse, ORM, Mongoose, TypeORM, Sanity.io, Frontend Development, Backend Development, Web Development, Typescript Developer, Responsive Design",
          },
        ]}
      />
      <Head>
      <meta name="google-site-verification" content="1HmVLHpYhrIILGM5zokg1pmC8c1IimFtRCELDLZauKI" />
      </Head>
      <About />
      <Skills />
      <ShowCaseList title="Experience" details={EXPERIENCE} />
      <ShowCaseList title="Education" details={EDUCATION} />
      <Project />
    </>
  );
}
