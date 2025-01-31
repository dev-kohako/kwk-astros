import { Divider, Link } from "@heroui/react"
import { siteConfig } from "@/config/site";
import { BentoMeIcon, GithubIcon, InstagramIcon, LinkedInIcon, YouTubeIcon } from "./icons"
import { ThemeSwitch } from "./theme-switch";

export const Footer = ({ type }: { type: string }) => {
  return (
    <footer className="w-full flex items-center justify-center bg-white/10">
      <div className="max-w-[61em] container pt-5 md:mx-6 flex-grow md:flex md:items-center mx-auto md:justify-between">
        <div className="text-center mb-5">
          © 2024 Kohako.dev, Inc. All rights reserved.
        </div>
        <div className="flex justify-center items-center space-x-2 mb-4">
          <Link href={siteConfig.links.github}>
            <GithubIcon className="text-zinc-800 dark:text-zinc-200" />
          </Link>
          <Link href={siteConfig.links.linkedin}>
            <LinkedInIcon className="text-zinc-800 dark:text-zinc-200" />
          </Link>
          <Link href={siteConfig.links.instagram}>
            <InstagramIcon className="text-zinc-800 dark:text-zinc-200"  />
          </Link>
          <Link href={siteConfig.links.bento}>
            <BentoMeIcon className="text-zinc-800 dark:text-zinc-200" />
          </Link>
          <Link href={siteConfig.links.youtube}>
            <YouTubeIcon className="text-zinc-800 dark:text-zinc-200 mr-1" />
          </Link>
          <Divider orientation="vertical" className="h-5 bg-zinc-800 dark:bg-zinc-200 " />
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}