import {
  ClipboardListIcon,
  Home,
  MessageCircle,
  Radio,
  SlidersHorizontal,
  Users,
} from "lucide-react";

export const companyMenu = [
  {
    url: "/dashboard",
    icon: <Home width={19} height={19} />,
    name: "Home",
  },
  {
    url: "/dashboard/jobs",
    icon: <ClipboardListIcon width={19} height={19} />,
    name: "Jobs",
  },
  // {
  //   url: "/dashboard/campaigns",
  //   icon: <Radio width={19} height={19} />,
  //   name: "Campaigns",
  // },
  {
    url: "/dashboard/settings",
    icon: <SlidersHorizontal width={19} height={19} />,
    name: "Settings",
  },
  {
    url: "/dashboard/team",
    icon: <Users width={19} height={19} />,
    name: "Team",
  },
  {
    url: "/dashboard/chats",
    icon: <MessageCircle width={19} height={19} />,
    name: "Chats",
  },
];
