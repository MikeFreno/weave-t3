import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import LightLogo from "@/public/Logo - light.png";
import DarkLogo from "@/public/Logo - dark.png";
import { Nunito, Raleway } from "@next/font/google";
import MenuBars from "@/src/icons/MenuBars";
import Menu from "./Menu";
import LoginModal from "./loginModal";
import { SunIcon } from "@/src/icons/SunIcon";
import { MoonIcon } from "@/src/icons/MoonIcon";
import { Switch, Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import ThemeContext from "./ThemeContextProvider";
import useOnClickOutside from "./ClickOutsideHook";

const railway_300 = Raleway({ weight: "300", subsets: ["latin"] });
const nunito_400 = Nunito({ weight: "400", subsets: ["latin"] });

function Navbar() {
  const { isDarkTheme, switchDarkTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showingLoginModal, setShowingLoginModal] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();
  const menuRef = useRef();
  const closeRef = useRef();
  const loginRef = useRef();
  const loginButtonRef = useRef();
  const switchRef = useRef();

  useEffect(() => {
    if (pathname == "/app") {
      if (showingLoginModal) {
        document.getElementById("app-body")?.classList.add("modal-open");
      } else {
        document.getElementById("app-body")?.classList.remove("modal-open");
      }
    } else if (pathname == "/") {
      if (showingLoginModal) {
        document.getElementById("main")?.classList.add("modal-open");
      } else {
        document.getElementById("main")?.classList.remove("modal-open");
      }
    }
  }, [showingLoginModal]);

  useOnClickOutside([menuRef, closeRef, switchRef], () => {
    setMenuOpen(false);
  });

  useOnClickOutside([loginRef, loginButtonRef, switchRef], () => {
    setShowingLoginModal(false);
  });

  useEffect(() => {
    rotateBars();
  }, [menuOpen]);

  function rotateBars() {
    if (menuOpen) {
      document.getElementById("LineA")?.classList.add("LineA");
      document.getElementById("LineB")?.classList.add("LineB");
    } else {
      document.getElementById("LineA")?.classList.remove("LineA");
      document.getElementById("LineB")?.classList.remove("LineB");
    }
  }
  function menuToggle() {
    setMenuOpen(!menuOpen);
    rotateBars();
    if (showingLoginModal) {
      loginToggle();
    }
  }
  function loginToggle() {
    setShowingLoginModal(!showingLoginModal);
    if (menuOpen) {
      menuToggle();
    }
  }
  function openLoginRegisterModal() {
    loginToggle();
  }

  return (
    <div className="stopIT">
      <nav
        className={`fixed z-50 flex w-screen p-2 ${
          pathname !== "/app" ? "backdrop-blur" : null
        }`}
      >
        {pathname == "/app" ? null : (
          <div
            className={`mx-4 my-2 text-[#171717] dark:text-[#E2E2E2] ${railway_300.className} flex flex-1`}
          >
            <Link href={"/"} className="flex">
              <Image
                src={isDarkTheme ? DarkLogo : LightLogo}
                alt="logo"
                width={40}
                height={40}
                className="logoSpinner"
              />
              <span className="mx-2 my-auto text-2xl text-[#171717] dark:text-[#E2E2E2]">
                Weave
              </span>
            </Link>
          </div>
        )}
        <div className="my-auto flex justify-end" style={{ flex: 3 }}>
          <div className={pathname == "/app" ? "hidden" : "hidden md:block"}>
            <ul className="flex text-sm text-[#171717] dark:text-[#E2E2E2]">
              <span ref={switchRef}>
                <Switch
                  checked={isDarkTheme}
                  shadow
                  bordered
                  size="md"
                  color="secondary"
                  iconOn={<MoonIcon />}
                  iconOff={<SunIcon />}
                  onChange={switchDarkTheme}
                  className="my-auto"
                />
              </span>
              <li className="mx-2 my-auto">
                {pathname == "/" ? (
                  <Link
                    href="/"
                    className="border-b-2 border-[#171717] text-[#171717] dark:border-[#E2E2E2] dark:text-[#E2E2E2]"
                  >
                    Home
                  </Link>
                ) : (
                  <Link
                    href="/"
                    className="border-[#171717] text-[#171717] hover:border-b-2 dark:border-[#E2E2E2] dark:text-[#E2E2E2]"
                  >
                    Home
                  </Link>
                )}
              </li>
              <li className="mx-2 my-auto">
                {pathname == "/downloads" ? (
                  <Link
                    href="/downloads"
                    className="border-b-2 border-[#171717] text-[#171717] dark:border-[#E2E2E2] dark:text-[#E2E2E2]"
                  >
                    Download
                  </Link>
                ) : (
                  <Link
                    href="/downloads"
                    className="border-[#171717] text-[#171717] hover:border-b-2 dark:border-[#E2E2E2] dark:text-[#E2E2E2]"
                  >
                    Download
                  </Link>
                )}
              </li>
              {session ? (
                <li className="mx-2 my-auto">
                  <button onClick={() => signOut()}>Sign out</button>
                </li>
              ) : (
                <li className="mx-2 my-auto">
                  <button
                    className="border-[#171717] text-[#171717] hover:border-b-2 dark:border-[#E2E2E2] dark:text-[#E2E2E2]"
                    onClick={loginToggle}
                    ref={loginButtonRef}
                  >
                    Login / Register
                  </button>
                </li>
              )}
              <li className="mx-2 my-auto text-sm ">
                <Button shadow color="gradient" auto size={"sm"}>
                  <Link href={"/app"} className="text-[#E2E2E2]">
                    Web App
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className={pathname == "/app" ? "my-2" : "my-2 md:hidden"}>
          <div
            className="z-10 my-auto flex justify-end px-4 text-lg"
            ref={switchRef}
          >
            <Switch
              checked={isDarkTheme}
              shadow
              bordered
              size="md"
              color="secondary"
              iconOn={<MoonIcon />}
              iconOff={<SunIcon />}
              onChange={switchDarkTheme}
              className="my-auto mr-2"
            />
            {isDarkTheme ? (
              <button onClick={menuToggle} className="my-auto" ref={closeRef}>
                <MenuBars stroke="white" />
              </button>
            ) : (
              <button onClick={menuToggle} className="my-auto" ref={closeRef}>
                <MenuBars stroke="black" />
              </button>
            )}
          </div>
        </div>
        {menuOpen ? (
          <Menu openLogin={openLoginRegisterModal} menuRef={menuRef} />
        ) : null}
      </nav>
      {showingLoginModal ? (
        <LoginModal onClose={loginToggle} loginRef={loginRef} />
      ) : null}
    </div>
  );
}

export default Navbar;
