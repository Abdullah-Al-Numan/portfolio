import React from 'react'
import Image from "next/image";
import FadeRight from "@/animation/FadeRight";
import FadeUp from "@/animation/FadeUp";
import { AnimatePresence } from "framer-motion";

const About = () => {
    return (
        <div id='about' className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-8 px-6 sm:px-14 md:px-20 lg:flex-row">
            <div className="w-full sm:w-1/2 md:w-2/3 lg:inline-block lg:h-full lg:w-1/2">
                <AnimatePresence>
                    <FadeUp key="hero-image" duration={0.6}>
                        <Image
                            src='/static/profileImage.jpg'
                            width={100}
                            height={100}
                            className="h-auto lg:p-16 w-full rounded-full"
                            alt="hero image"
                            unoptimized
                        />
                    </FadeUp>
                </AnimatePresence>
            </div>
            <div className="sm:1/2 w-full lg:w-1/2">
                <AnimatePresence>
                    <FadeUp key="title-greeting" duration={0.6}>
                        <h1 className="bg-gradient-to-r from-teal-500 to-tera-500 bg-clip-text text-3xl font-bold text-transparent dark:from-teal-200 dark:to-teal-500 sm:text-4xl md:text-3xl xl:text-4xl">
                            Hi, I&apos;m Abdullah Al Numan
                        </h1>
                    </FadeUp>
                    <FadeUp key="description-1" duration={0.6} delay={0.2}>
                        <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300">
                            As a web developer, I bring digital visions to life through meticulous coding. With a focus on design excellence and user-centered experiences, I craft websites and digital products that stand out.
                        </p>
                    </FadeUp>
                    <FadeUp key="description-2" duration={0.6} delay={0.4}>
                        <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300">
                            My toolkit includes HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, Nest.js, MongoDB, and MySQL. Dive into my latest projects to see how I leverage these technologies to create compelling web solutions.
                        </p>
                    </FadeUp>
                    <FadeRight
                        key="hero-location"
                        duration={0.6}
                        delay={0.8}
                        className="mr-0 mt-8 flex items-center justify-center gap-4 lg:mr-8 lg:justify-end"
                    >
                        <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
                            <Image
                                className="-z-10 h-full w-full bg-cover bg-no-repeat"
                                alt="Indian flag"
                                src="https://flagcdn.com/bd.svg"
                                width={15}
                                height={15}
                            />
                        </div>
                        <span className="font-medium">Dhaka, Bangladesh</span>
                    </FadeRight>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default About
