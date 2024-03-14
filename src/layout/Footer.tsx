import { siteMetadata } from "@/data/siteMetaData.mjs";
import Link from "./Link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="flex w-full flex-col items-center gap-20 bg-transparent px-6 py-8 sm:px-14 md:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 rounded-2xl bg-teal-600 p-8 text-zinc-100 dark:bg-teal-500 sm:p-12 md:gap-12 lg:p-20">
        <div className="text-center">
          <span className="inline-block rounded-full bg-zinc-100 px-3 py-1 uppercase text-tera-500 font-semibold">
            Get in touch
          </span>
        </div>
        <Link classes="h-20 w-20" />
      </div>
      <div className="flex w-full flex-col-reverse items-center justify-between gap-8 text-center  md:flex-row md:justify-between lg:mx-auto lg:max-w-7xl">
        <span>©{year} Abdullah Al Numan</span>
        <Link classes="h-6 w-6" />
      </div>
    </footer>
  );
}
