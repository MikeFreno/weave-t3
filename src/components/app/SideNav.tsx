import React, {
  MouseEventHandler,
  RefObject,
  useContext,
  useState,
} from "react";
import LightLogo from "@/public/Logo - light.png";
import DarkLogo from "@/public/Logo - dark.png";
import Image from "next/image";
import ThemeContext from "../ThemeContextProvider";
import { Tooltip } from "@nextui-org/react";
import AddIcon from "@/src/icons/AddIcon";
import BullhornIcon from "@/src/icons/BullhornIcon";
import RobotIcon from "@/src/icons/RobotIcon";
import InnerNav from "./InnerNav";

const SideNav = (props: {
  serverModalToggle: MouseEventHandler<HTMLButtonElement>;
  serverButtonRef: RefObject<HTMLButtonElement>;
  botModalToggle: MouseEventHandler<HTMLButtonElement>;
  botButtonRef: RefObject<HTMLButtonElement>;
  currentTab: string;
  currentTabSetter: any;
}) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <aside className="stopIT fixed h-screen w-20 bg-zinc-700 dark:bg-zinc-900">
      <div className="mb-4 flex justify-center border-b-2 border-zinc-400 py-4 dark:border-zinc-600">
        <Tooltip
          content={"Direct Messaging"}
          trigger="hover"
          color={"secondary"}
          placement="rightEnd"
        >
          <button
            id="DMS"
            className="logoSpinner z-50"
            onClick={() => {
              props.currentTabSetter("DMS");
            }}
          >
            <Image
              src={isDarkTheme ? DarkLogo : LightLogo}
              alt="logo"
              width={50}
              height={50}
            />
          </button>
        </Tooltip>
      </div>
      <div id="joined-server-list"></div>
      <div id="server-utilities">
        <div className="mb-4 flex justify-center">
          <Tooltip
            content={"Add a Server!"}
            trigger="hover"
            color={"secondary"}
            placement="rightEnd"
          >
            <button
              ref={props.serverButtonRef}
              className="borderRadiusTransform shaker w-min rounded-2xl bg-zinc-300 p-2 hover:bg-zinc-400 active:bg-zinc-500 dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:active:bg-zinc-800"
              onClick={props.serverModalToggle}
            >
              <AddIcon
                height={40}
                width={40}
                stroke={"#4c1d95"}
                strokeWidth={1.5}
              />
            </button>
          </Tooltip>
        </div>
        <div className="flex justify-center">
          <Tooltip
            content={"Join Public Server!"}
            trigger="hover"
            color={"secondary"}
            placement="rightEnd"
          >
            <button
              className="borderRadiusTransform shaker flex justify-center rounded-2xl bg-zinc-300 p-2 hover:bg-zinc-400 active:bg-zinc-500 dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:active:bg-zinc-800"
              onClick={() => {
                props.currentTabSetter("PublicServers");
              }}
            >
              <div className="flex h-[40px] w-[40px] items-center justify-center">
                <BullhornIcon
                  height={30}
                  width={30}
                  fill={"#4c1d95"}
                  strokeWidth={1}
                />
              </div>
            </button>
          </Tooltip>
          {props.currentTab === "PublicServers" ? (
            <span className="absolute mr-20 mt-4 h-4 w-4 rounded-full bg-zinc-200" />
          ) : null}
        </div>
        <div className="mt-4 flex justify-center border-t-2 border-zinc-400 py-4 dark:border-zinc-600">
          <Tooltip
            content={"Bot Services"}
            trigger="hover"
            color={"secondary"}
            placement="rightEnd"
          >
            <button
              ref={props.botButtonRef}
              className="borderRadiusTransform shaker flex justify-center rounded-2xl bg-zinc-300 p-2 hover:bg-zinc-400 active:bg-zinc-500 dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:active:bg-zinc-800"
              onClick={props.botModalToggle}
            >
              <RobotIcon height={40} width={40} fill={"#4c1d95"} />
            </button>
          </Tooltip>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
