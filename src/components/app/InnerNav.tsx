import AddIcon from "@/src/icons/AddIcon";
import ArrowTrend from "@/src/icons/ArrowTrend";
import BeakerIcon from "@/src/icons/BeakerIcon";
import BooksIcon from "@/src/icons/BooksIcon";
import CameraIcon from "@/src/icons/CameraIcon";
import ClockIcon from "@/src/icons/ClockIcon";
import FlameIcon from "@/src/icons/FlameIcon";
import GamepadIcon from "@/src/icons/GamepadIcon";
import HandWave from "@/src/icons/HandWave";
import PaperPlanes from "@/src/icons/PaperPlanes";
import SearchIcon from "@/src/icons/SearchIcon";
import VerifiedIcon from "@/src/icons/VerifiedIcon";
import VinylIcon from "@/src/icons/VinylIcon";
import { Input, Tooltip } from "@nextui-org/react";
import { Server, Server_Admin, Server_Member, User } from "@prisma/client";
import React, { RefObject, useContext, useEffect, useState } from "react";
import ThemeContext from "../ThemeContextProvider";
import InviteModal from "./InviteModal";

const InnerNav = (props: {
  currentTab: string;
  directMessageButtonRef: RefObject<HTMLButtonElement>;
  dmModalToggle: React.MouseEventHandler<HTMLButtonElement>;
  selectedInnerTab: string;
  setSelectedInnerTab: any;
  selectedInnerTabID: number;
  currentUser: User & {
    servers: Server[];
    memberships: Server_Member[];
    adminships: Server_Admin[];
  };
}) => {
  const {
    currentTab,
    selectedInnerTab,
    setSelectedInnerTab,
    currentUser,
    selectedInnerTabID,
  } = props;
  const { isDarkTheme } = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("Recent");

  const currentUsersServersOwner = currentUser?.servers;
  const currentUsersServersAdmin = currentUser?.adminships;
  const currentUsersServersMember = currentUser?.memberships;
  const [joinedServerList, setJoinedServerList] = useState<number[]>([]);
  const [inviteModalShowing, setInviteModalShowing] = useState(false);

  useEffect(() => {
    const joinedServers = [...joinedServerList];
    currentUsersServersOwner.forEach((server) => {
      if (!joinedServers.includes(server.id)) {
        joinedServers.push(server.id);
      }
    });
    currentUsersServersAdmin.forEach((server) => {
      if (!joinedServers.includes(server.id)) {
        joinedServers.push(server.id);
      }
    });
    currentUsersServersMember.forEach((server) => {
      if (!joinedServers.includes(server.id)) {
        joinedServers.push(server.id);
      }
    });
    setJoinedServerList(joinedServers);
  }, [
    currentUsersServersOwner,
    currentUsersServersAdmin,
    currentUsersServersMember,
  ]);

  useEffect(() => {
    if (currentTab === "server") {
    }
  }, [joinedServerList]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Perform your search logic here
  };
  const inviteModalToggle = () => {
    setInviteModalShowing(!inviteModalShowing);
  };

  if (currentTab == "DMS") {
    return (
      <div className="fixed h-screen w-52 border-l border-r border-zinc-700 bg-zinc-500 dark:border-zinc-500 dark:bg-zinc-800">
        <form onSubmit={handleSubmit} className="mx-2 py-4">
          <Input
            type="search"
            className="w-24 text-xs"
            placeholder="Search..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            contentLeft={
              <SearchIcon
                height={12}
                width={12}
                stroke={isDarkTheme ? "#e4e4e7" : "#27272a"}
              />
            }
          />
        </form>
        <div className="">
          <button
            className={`mx-auto mt-1 flex w-11/12 rounded-md px-4 py-2 text-lg ${
              selectedInnerTab == "friends"
                ? "bg-zinc-400 dark:bg-zinc-500"
                : "hover:bg-zinc-600 dark:hover:bg-zinc-700"
            }`}
            onClick={() => setSelectedInnerTab("friends")}
          >
            <span className="my-auto">
              <HandWave
                height={24}
                width={24}
                color={isDarkTheme ? "#e4e4e7" : "#27272a"}
              />
            </span>
            <span className="mx-auto">Friends</span>
          </button>
          <button
            className={`mx-auto mt-1 flex w-11/12 rounded-md px-4 py-2 text-lg ${
              selectedInnerTab == "conversations"
                ? "bg-zinc-400 dark:bg-zinc-500"
                : "hover:bg-zinc-600 dark:hover:bg-zinc-700"
            }`}
            onClick={() => setSelectedInnerTab("conversations")}
          >
            <span className="my-auto">
              <PaperPlanes
                height={24}
                width={24}
                color={isDarkTheme ? "#e4e4e7" : "#27272a"}
              />
            </span>
            <span className="mx-auto">Requests</span>
          </button>
          <hr className="my-4 h-[2px]" />
          <div className="my-4 flex justify-evenly">
            <Tooltip
              content={"Sort by most frequent"}
              trigger="hover"
              color={"secondary"}
              placement="bottom"
              css={{ width: "min-content" }}
            >
              <button onClick={() => setSortType("Frequency")}>
                <FlameIcon
                  height={18}
                  width={18}
                  stroke={
                    sortType == "Frequency"
                      ? "#dc2626"
                      : isDarkTheme
                      ? "#e4e4e7"
                      : "#27272a"
                  }
                  strokeWidth={1.5}
                />
              </button>
            </Tooltip>
            <Tooltip
              content={"Sort by most recent messages"}
              trigger="hover"
              color={"secondary"}
              placement="bottom"
              css={{ width: "min-content" }}
            >
              <button onClick={() => setSortType("Recent")}>
                <ClockIcon
                  height={18}
                  width={18}
                  stroke={
                    sortType == "Recent"
                      ? "#0284c7"
                      : isDarkTheme
                      ? "#e4e4e7"
                      : "#27272a"
                  }
                  strokeWidth={1.5}
                />
              </button>
            </Tooltip>
          </div>
          <div className="flex justify-center">
            <span>Direct Messages</span>
            <button
              ref={props.directMessageButtonRef}
              className="my-auto ml-6 mt-1"
              onClick={props.dmModalToggle}
            >
              <AddIcon
                height={18}
                width={18}
                stroke={isDarkTheme ? "#e4e4e7" : "#27272a"}
                strokeWidth={1.5}
              />
            </button>
          </div>
          <div id="Direct-Message-List"></div>
        </div>
      </div>
    );
  } else if (currentTab == "PublicServers") {
    return (
      <div className="fixed h-screen w-52 border-r border-l border-zinc-700 bg-zinc-500 dark:border-zinc-500 dark:bg-zinc-800">
        <span className="justify-left flex pl-4 pt-4 text-xl font-bold">
          Public Servers
        </span>
        <form onSubmit={handleSubmit} className="mx-2 py-4">
          <Input
            type="search"
            className="w-24 text-xs"
            placeholder="Search..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            contentLeft={
              <SearchIcon
                height={12}
                width={12}
                stroke={isDarkTheme ? "#e4e4e7" : "#27272a"}
              />
            }
          />
        </form>
        <button
          className={`mx-auto mt-1 flex w-11/12 rounded-md px-4 py-2 text-lg ${
            selectedInnerTab == "Made By Weave"
              ? "bg-zinc-400 dark:bg-zinc-500"
              : "hover:bg-zinc-600 dark:hover:bg-zinc-700"
          }`}
          onClick={() => setSelectedInnerTab("Made By Weave")}
        >
          <span className="my-auto -ml-2">
            <VerifiedIcon height={24} width={24} color="#5b21b6" />
          </span>
          <span className="mx-auto">Made By Weave</span>
        </button>
        <hr className="my-4 h-[2px]" />
        <button
          className={`mx-auto mt-1 flex w-11/12 rounded-md px-4 py-2 text-lg ${
            selectedInnerTab == "Science & Technology"
              ? "bg-zinc-400 dark:bg-zinc-500"
              : "hover:bg-zinc-600 dark:hover:bg-zinc-700"
          }`}
          onClick={() => setSelectedInnerTab("Science & Technology")}
        >
          <span className="my-auto">
            <BeakerIcon
              height={24}
              width={24}
              color={isDarkTheme ? "#e4e4e7" : "#27272a"}
              strokeWidth={1.5}
            />
          </span>
          <span className="mx-auto">Science & Technology</span>
        </button>
        <button
          className={`mx-auto mt-1 flex w-11/12 rounded-md px-4 py-2 text-lg ${
            selectedInnerTab == "Education"
              ? "bg-zinc-400 dark:bg-zinc-500"
              : "hover:bg-zinc-600 dark:hover:bg-zinc-700"
          }`}
          onClick={() => setSelectedInnerTab("Education")}
        >
          <span className="my-auto">
            <BooksIcon
              height={24}
              width={24}
              color={isDarkTheme ? "#e4e4e7" : "#27272a"}
            />
          </span>
          <span className="mx-auto">Education</span>
        </button>
        <button
          className={`mx-auto mt-1 flex w-11/12 rounded-md px-4 py-2 text-lg ${
            selectedInnerTab == "Gaming"
              ? "bg-zinc-400 dark:bg-zinc-500"
              : "hover:bg-zinc-600 dark:hover:bg-zinc-700"
          }`}
          onClick={() => setSelectedInnerTab("Gaming")}
        >
          <span className="my-auto">
            <GamepadIcon
              height={30}
              width={30}
              color={isDarkTheme ? "#e4e4e7" : "#27272a"}
            />
          </span>
          <span className="mx-auto">Gaming</span>
        </button>
        <button
          className={`mx-auto mt-1 flex w-11/12 rounded-md px-4 py-2 text-lg ${
            selectedInnerTab == "Entertainment"
              ? "bg-zinc-400 dark:bg-zinc-500"
              : "hover:bg-zinc-600 dark:hover:bg-zinc-700"
          }`}
          onClick={() => setSelectedInnerTab("Entertainment")}
        >
          <span className="my-auto">
            <CameraIcon
              height={24}
              width={24}
              color={isDarkTheme ? "#e4e4e7" : "#27272a"}
            />
          </span>

          <span className="mx-auto pl-2">Entertainment</span>
        </button>
        <button
          className={`mx-auto mt-1 flex w-11/12 rounded-md px-4 py-2 text-lg ${
            selectedInnerTab == "Music"
              ? "bg-zinc-400 dark:bg-zinc-500"
              : "hover:bg-zinc-600 dark:hover:bg-zinc-700"
          }`}
          onClick={() => setSelectedInnerTab("Music")}
        >
          <span className="my-auto">
            <VinylIcon
              height={24}
              width={24}
              color={isDarkTheme ? "#e4e4e7" : "#27272a"}
            />
          </span>
          <span className="mx-auto">Music</span>
        </button>
        <button
          className={`mx-auto mt-1 flex w-11/12 rounded-md px-4 py-2 text-lg ${
            selectedInnerTab == "Finance & Economics"
              ? "bg-zinc-400 dark:bg-zinc-500"
              : "hover:bg-zinc-600 dark:hover:bg-zinc-700"
          }`}
          onClick={() => setSelectedInnerTab("Finance & Economics")}
        >
          <span className="my-auto">
            <ArrowTrend
              height={24}
              width={24}
              color={isDarkTheme ? "#e4e4e7" : "#27272a"}
            />
          </span>
          <span className="mx-auto">Finance & Economics</span>
        </button>
      </div>
    );
  } else {
    return (
      <div className="fixed h-screen w-52 border-r border-l border-zinc-700 bg-zinc-500 dark:border-zinc-500 dark:bg-zinc-800">
        <div className="justify-left flex pl-4 pt-4 text-xl font-bold">
          {selectedInnerTab}
        </div>
        <div className="p-4">
          {/* if user is owner or admin  */}
          <div>Server Settings</div>
          {/* end */}
          <div>Channel List</div>
          {/* depends on server settings */}
          <button className="flex" onClick={inviteModalToggle}>
            Invite Someone
            <span className="my-auto">
              <AddIcon
                height={16}
                width={16}
                stroke={isDarkTheme ? "#e4e4e7" : "#27272a"}
                strokeWidth={2}
              />
            </span>
          </button>
        </div>
        {inviteModalShowing ? (
          <InviteModal
            isDarkTheme={isDarkTheme}
            setInviteModalShowing={setInviteModalShowing}
            selectedInnerTabID={selectedInnerTabID}
          />
        ) : null}
      </div>
    );
  }
};

export default InnerNav;
