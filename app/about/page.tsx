"use client";
import HeadRootNames from "@/ui/HeadRootNames";
import OurPerformance from "components/about/OurPerformance";
import OurThings from "components/about/OurThings";
import OutTeam from "components/about/OutTeam";
import SmallIntroduction from "components/about/SmallIntroduction";
import TotalCountsOfDetails from "components/about/TotalCountsOfDetails";
import WhatWeProvide from "components/about/WhatWeProvide";
import { domAnimation, LazyMotion } from "framer-motion";
import Error from "next/error";
import React, { useState } from "react";

const About = (): JSX.Element => {
  const [isError, setIsError] = useState<any>();

  if (isError)
    return <Error statusCode={404} title={`sathanam missing ann pinnea va `} />;
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden max-lg:mt-[100px] ">
      <HeadRootNames customPath="About" />
      <LazyMotion features={domAnimation}>
        <div className="mx-4  grid lg:mx-[5%] xl:mx-[10%]">
          <SmallIntroduction />
          <WhatWeProvide />
          <OurPerformance />
        </div>
        <div className="mx-4 grid">
          <OurThings />
          <TotalCountsOfDetails />
        </div>
        <div className="mx-4 grid lg:mx-[5%] xl:mx-[10%]">
          <OutTeam />
        </div>
      </LazyMotion>
    </div>
  );
};

export default About;
