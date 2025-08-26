import { HouseIcon, InboxIcon, ZapIcon } from "lucide-react";

export const meta = {
  colors: {
    light: "#ffffff",
    dark: "#09090b",
  },
  title: "Next.js AI",
  description: "Next.js AI",
  keywords: ["Next.js", "AI", "MicrodotMatrix"],
  author: "MicrodotMatrix",
  url: "https://github.com/microdotmatrix/nextjs-ai",
};

// Navigation links array
export const navigationLinks = [
  { href: "/", label: "Home", icon: HouseIcon, active: true },
  { href: "/dashboard", label: "Dashboard", icon: ZapIcon },
  { href: "/contact", label: "Contact", icon: InboxIcon },
];
