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
