import React from "react"
import * as Icon from "react-feather"
import { FaWpforms, FaCamera, FaSignal, FaCertificate, FaRegQuestionCircle, FaTicketAlt, FaAward, FaFileDownload, FaUser } from "react-icons/fa"

const horizontalMenuConfig = [
  {
    id: "home1",
    title: "Lobby",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/pages/home"
  },
  {
    id: "scientifichall/1",
    title: "Auditorium",
    type: "item",
    icon: <Icon.Video size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/pages/scientifichall/1"
  },
  {
    id: "Scientificlobby",
    title: "Technical Session",
    type: "item",
    icon: <Icon.FileText size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/pages/Scientificlobby"
  },
  {
    id: "exhibitionstall/1",
    title: "Exhibition",
    type: "item",
    icon: <Icon.Star size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/pages/exhibitionstall/1"
  },
  {
    id: "eposter1",
    title: "ePoster",
    type: "item",
    icon: <Icon.Star size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/pages/eposter"
  },
  // {
  //     id: "event",
  //     title: "Events",
  //     type: "dropdown",
  //     icon: <Icon.Airplay size={16} />,
  //     children: [
  //       {
  //         id: "upcoming",
  //         title: "Upcoming Events",
  //         type: "item",
  //         icon: <Icon.Circle size={10} />,
  //         navLink: "/pages/upcomingevents",
  //         permissions: ["admin", "editor"]
  //       },
  //       {
  //         id: "past",
  //         title: "Past Events",
  //         type: "item",
  //         icon: <Icon.Circle size={10} />,
  //         navLink: "/pages/pastevents",
  //         permissions: ["admin", "editor"]
  //       }
  //     ]
  //   },
  {
    id: "faculty1",
    title: "Faculty",
    type: "item",
    icon: <Icon.Mic size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/pages/faculty"
  },
  {
    id: "download1",
    title: "Downloads",
    type: "item",
    icon: <FaFileDownload size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/pages/download"
  },
  {
    id: "chatroom",
    title: "Chat",
    type: "item",
    icon: <FaUser size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/pages/chatRoom"
  },
  {
    id: "photobooth",
    title: "PhotoBooth",
    type: "item",
    icon: <FaCamera size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/pages/photoBooth"
  },
  // {
  //   id: "question",
  //   title: "Questions",
  //   type: "item",
  //   icon: <FaRegQuestionCircle size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/pages/questions"
  // },
  // {
  //   id: "feedback",
  //   title: "Feedback",
  //   type: "item",
  //   icon: <FaWpforms size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/pages/feedback"
  // },
  {
    id: "logout",
    title: "Logout",
    type: "item",
    icon: <Icon.Power size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/logout"
  }
]

export default horizontalMenuConfig
