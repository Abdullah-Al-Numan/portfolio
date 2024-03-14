import Image from "next/image";
import Corosel from "@/components/Corosel";
import { FiExternalLink } from "react-icons/fi";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";

export type ProjectCardProps = {
  name: string;
  favicon: string;
  imageUrl: string[];
  description: string;
  liveWebsiteHref?: string;
};

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <motion.div
      initial={{ y: 80 }}
      whileInView={{ y: 0 }}
      transition={{
        type: "spring",
        duration: 0.4,
      }}
      className="w-full overflow-hidden rounded-lg border border-zinc-500/30 bg-white transition-shadow duration-150 hover:shadow-md dark:border-teal-200/10 dark:bg-zinc-800 dark:hover:shadow-sm dark:hover:shadow-teal-200/50"
    >
      <Corosel images={props.imageUrl} aspectRatio={2.1} />
      <div className="p-3 sm:p-4">
        <div className="flex items-center gap-3">
          <span className="relative h-auto w-8">
            <Image src={props.favicon} alt="logo" height={32} width={32} />
          </span>
          <span className="font-semibold">{props.name}</span>
        </div>
        <div className="mt-3">
          <p>{props.description}</p>
        </div>
        <div className="mt-6 flex items-center justify-end gap-6">
          {props.liveWebsiteHref && (
            <a
              href={props.liveWebsiteHref}
              target="_blank"
              className="flex items-center gap-1 underline"
            >
              <FiExternalLink className="h-5 w-5" /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
