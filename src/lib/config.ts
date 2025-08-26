import { HouseIcon, InboxIcon, ZapIcon } from "lucide-react";

export const meta = {
  colors: {
    light: "#ffffff",
    dark: "#09090b",
  },
  title: "Death Matter Tools",
  description: "Death Matter Tools",
  keywords: ["Death Matter", "Tools", "death", "obituaries", "ai"],
  author: "MicrodotMatrix",
  url: "https://github.com/microdotmatrix/hybrid-clerk",
};

// Navigation links array
export const navigationLinks = [
  { href: "/", label: "Home", icon: HouseIcon, active: true },
  { href: "/dashboard", label: "Dashboard", icon: ZapIcon },
  { href: "/contact", label: "Contact", icon: InboxIcon },
];
