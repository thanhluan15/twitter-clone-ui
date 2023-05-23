/** @format */

import { SidebarItemProps } from "@/components/shared/SidebarItem";
import { AiTwotoneHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";

export let navItems: SidebarItemProps[] = [
  {
    href: "/",
    text: "Home",
    Icon: <AiTwotoneHome size={26}/>,
  },
  {
    href: "/explore",
    text: "Explore",
    disabled: true,
    Icon: <MdOutlineExplore size={26} />,
  },
  {
    disabled: true,
    href: "/notifications",
    text: "Notifications",
    Icon: <IoNotificationsOutline size={26} />,
  },
  // {
  //   href: "/messages",
  //   text: "Messages",
  //   diabled: true,
  //   icon: "",
  // },
  // {
  //   href: "/bookmarks",
  //   text: "Bookmarks",
  //   diabled: true,
  //   icon: "",
  // },
  // {
  //   href: "/settings",
  //   text: "Settings",
  //   diabled: true,
  //   icon: "",
  // },
];