import React from 'react'
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/Icons";
import { siteMetadata } from '@/data/siteMetaData.mjs';

const Link = ({ classes }: { classes: string }) => {
  return (
    <div className="flex items-center justify-center gap-6">
      <a
        href={siteMetadata.github}
        target="_blank"
        className={`cursor-pointer ${classes}`}
      >
        <GithubIcon />
      </a>
      <a
        href={siteMetadata.linkedin}
        target="_blank"
        className={`cursor-pointer ${classes}`}
      >
        <LinkedinIcon />
      </a>
      <a
        href={`mailto:${siteMetadata.email}`}
        target="_blank"
        className={`cursor-pointer ${classes}`}
      >
        <MailIcon />
      </a>
    </div>
  )
}

export default Link
