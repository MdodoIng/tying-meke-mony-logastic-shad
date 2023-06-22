"use client";
import {
  DailyBestSeller,
  DealsOfTheDay,
  FeathersCategory,
  FooterProducts,
  HomeComponent,
  PopularProducts,
} from "components";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const Home = (): JSX.Element => {
  const pathname = usePathname();

  if (!pathname) {
    return (
      <>
        <div className="mt-52 flex h-full flex-col items-center justify-center">
          <Image
            width={1440}
            height={500}
            loading="lazy"
            src=""
            alt=""
            className="h-[500px] object-contain"
          />
          <h1
            style={{ fontSize: "40px", color: "red", fontFamily: "monospace" }}
          >
            <b className="text-green-600"></b>{" "}
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      <HomeComponent />;
      <FeathersCategory />;
      <PopularProducts />;
      <DailyBestSeller />;
      <DealsOfTheDay />;
      <FooterProducts />;
    </>
  );
};

export default Home;
