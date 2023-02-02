import { NextPage } from "next";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/home/Footer";
import LightLogo from "@/public/Logo - light.png";
import DarkLogo from "@/public/Logo - dark.png";
import DownloadButton from "@/src/components/home/DownloadButton";
import { MutableRefObject, useContext, useEffect, useRef } from "react";
import Head from "next/head";
import Parallax from "@/src/components/home/Parallax";
import Parallax_2 from "@/src/components/home/Parallax_2";
import ThemeContext from "../components/ThemeContextProvider";
import ModalsForSmallScreens from "../components/home/ModalsForSmallScreens";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const switchRef = useRef<HTMLElement>() as MutableRefObject<HTMLElement>;

  useEffect(() => {
    document.getElementById("html")?.classList.remove("scollDisabled");
  }, []);

  return (
    <>
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
            <meta name="description" content="Generated by create-t3-app" />
          </Head>
          <Navbar switchRef={switchRef} />
          <div id="main" className={`${inter.className} stopIT`}>
            <div
              className={`${
                isDarkTheme ? "topGradient" : "topGradientLight"
              } h-screen`}
            >
              <div className="hidden pt-24 md:block">
                <Parallax_2 />
              </div>
              <div className="flex justify-center pt-28">
                <Image
                  src={isDarkTheme ? DarkLogo : LightLogo}
                  alt="logo"
                  width={160}
                  height={160}
                />
              </div>
              <h1 className="mt-24 text-center text-5xl font-semibold tracking-widest text-zinc-800 dark:text-zinc-300">
                Group Hangouts.
                <br /> Encrypted
              </h1>
              <div className="-z-10 my-24 flex justify-center">
                <DownloadButton />
              </div>
              <div className="mx-8 mt-8 text-center tracking-widest text-zinc-800 dark:text-zinc-300">
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
            <div className="md:hidden">
              <ModalsForSmallScreens />
            </div>
            <div
              id="spacer"
              className="z-0 mx-4 mb-36 mt-36 h-screen rounded-md bg-[url('/work.jpg')] bg-cover bg-center sm:mb-0 md:mx-12 lg:mx-24 lg:rounded-[3rem] xl:mx-36"
            ></div>
          </div>
          <div className="mx-12 mb-4 mt-12 border-b border-zinc-800 dark:border-zinc-300" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
