"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const initialContext = {
  isPageTransition: false,
};

const SiteContext = createContext<any>({
  context: initialContext,
  setContext: () => null,
});

const SiteContextProvider = ({ children }: any): any => {
  return <SiteContext.Provider value={{}}>{children}</SiteContext.Provider>;
};

function useSiteContext() {
  const { context } = useContext(SiteContext);
  return context;
}

const useTogglePageTransition = () => {
  const {
    context: { isPageTransition },
    setContext,
  } = useContext(SiteContext);

  async function togglePageTransition(state: any) {
    setContext((prevState: any) => {
      return { ...prevState, isPageTransition: state };
    });
  }

  return togglePageTransition;
};

export { SiteContextProvider };
