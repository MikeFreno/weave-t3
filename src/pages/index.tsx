import { NextPage } from "next";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/home/Footer";
import LightLogo from "@/public/Logo - light.png";
import DarkLogo from "@/public/Logo - dark.png";
import DownloadButton from "@/src/components/home/DownloadButton";
import { useContext, useEffect, useRef, useState } from "react";
import Head from "next/head";
import Parallax from "@/src/components/home/Parallax";
import Parallax_2 from "@/src/components/home/Parallax_2";
import ThemeContext from "../components/ThemeContextProvider";
import ModalsForSmallScreens from "../components/home/ModalsForSmallScreens";
import LoadingElement from "../components/loading";
import { useSession } from "next-auth/react";
import StageBanner from "../components/StageBanner";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const switchRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bannerBGColor w-screen">
      <div
        className={isDarkTheme ? "bgColorGradient" : "bgColorGradientLight"}
        id="body"
      >
        <div
          id="bottomGradient"
          className={`${
            isDarkTheme ? "bottomGradient" : "bottomGradientLight"
          }`}
        >
          <Head>
            <title>Weave</title>
            <meta
              name="description"
              content="Weave Home | Powerful Group-Chatting Service"
            />
          </Head>
          <StageBanner isDarkTheme={isDarkTheme} />
          <Navbar switchRef={switchRef} />
          <div id="main" className={`${inter.className} stopIT`}>
            <div
              className={`${isDarkTheme ? "topGradient" : "topGradientLight"}`}
            >
              <div className="hidden pt-24 md:block">
                <Parallax_2 isDarkTheme={isDarkTheme} />
              </div>
              <div className="flex justify-center pt-28">
                <Image
                  src={isDarkTheme ? DarkLogo : LightLogo}
                  alt="logo"
                  width={160}
                  height={160}
                />
              </div>
              <h1 className="pt-24 text-center text-5xl font-semibold tracking-widest text-zinc-800 dark:text-zinc-300">
                Group Hangouts.
                <br /> Encrypted
              </h1>
              <div className="-z-10 flex justify-center py-24 ">
                <DownloadButton />
              </div>
              <div className="px-8 pt-8 text-center tracking-widest text-zinc-800 dark:text-zinc-300">
                <h2 className="text-4xl">For work, gaming or just chatting.</h2>
                <h4 className="text-md">
                  For each use case Weave provides seamless features to focus on
                  what matters.
                </h4>
                <span className="text-2xl">Text or voice,</span>
                <br />
                <span className="text-lg">
                  everything is end-to-end encrypted
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <Parallax />
            </div>
            <div className="hidden sm:block md:hidden">
              <ModalsForSmallScreens />
            </div>
          </div>
          <div className="z-0 mx-4 h-screen rounded-lg bg-[url('/app-preview-mobile.jpg')] bg-contain bg-center bg-no-repeat sm:mb-0 sm:bg-cover md:mx-12 md:my-36 md:bg-[url('/app-preview.jpg')] lg:mx-24 lg:rounded-3xl xl:mx-36"></div>
          <div className="mx-12 mb-4 border-b border-zinc-800 dark:border-zinc-300 md:mt-12" />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
