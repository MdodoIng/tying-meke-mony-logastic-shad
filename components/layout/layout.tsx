"use client";

import { isBrowser, isMobileSafari, useWindowSize } from "@/lib/helpers";
import { useEffect, useState } from "react";
import { pageTransitionSpeed } from "@/lib/motion";
import { m } from "framer-motion";
import Header from "components/Header/Header";
import Footer from "components/footer/Page";
import {
  FacebookIcon,
  HashTagIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/lib/icon";
import Feathers from "components/feature/Page";
import { usePathname } from "next/navigation";
import Welcome2Top from "@/ui/Welcome2Top";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const pageTransitionAnim = {
  show: {
    opacity: 1,
    transition: {
      duration: pageTransitionSpeed / 1000,
      delay: 0.2,
      ease: "linear",
      when: "beforeChildren",
    },
    hide: {
      opacity: 0,
      transition: pageTransitionSpeed / 1000,
      delay: 0.2,
      ease: "linear",
      when: "beforeChildren",
    },
  },
};

const Layout = ({ children }: any): JSX.Element => {
  const pathName: any = usePathname();

  // hide features from collection
  const hideFeatures: boolean = pathName === "/collections" ? false : true;

  return (
    <>
      <m.div
        initial="hide"
        animate="show"
        exit="hide"
        variants={pageTransitionAnim}
        className="mx-auto w-full max-w-[1440px]"
      >
        <Header />
        <main id="content">{children}</main>

        {hideFeatures && <Feathers />}

        {/* whatsApp */}

        <FloatingWhatsApp
          phoneNumber="+91 8075122414"
          accountName={"Aldan International"}
          avatar="../../redbl.svg"
        />
        <Footer />
        <div className="flex flex-col items-center justify-center gap-3 border-t border-emerald-300 px-4 py-2">
          <p className="cursor-default select-none text-center font-body text-xs text-gray-500 sm:text-sm md:text-left md:text-base">
            © 2023 Dodo,{" "}
            <span className="text-emerald-500">Aldan International</span> All
            Rights Reserved.
          </p>
        </div>
        <Welcome2Top />
      </m.div>
    </>
  );
};

export default Layout;
