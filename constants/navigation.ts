export const NAV_ITEMS = [
  {
    label: "Home",
    href: "#",
    submenu: ["Home ", "Home ", "Home "],
  },
  {
    label: "About Us",
    href: "#",
    submenu: ["Team", "Mission", "History"],
  },
  {
    label: "Services",
    href: "#",
    submenu: ["Plumbing Repair", "Installation", "Maintenance"],
  },
  {
    label: "Pricing",
    href: "#",
    submenu: ["Basic", "Standard", "Premium"],
  },
];

export const NAV_STYLES = {
  navGap: "gap-6",
  navText: "text-sm text-white font-semibold",
  itemGap: "gap-1",
  underlineColor: "bg-gray-400",
  underlineHeight: "h-0.5",
  underlineAnimationDuration: "duration-300",
  chevronSize: 12,
  hoverUnderlineColor: "bg-orange-400",
} as const;

export const BREAKPOINTS = {
  mobile: "md:flex hidden",
  tablet: "hidden md:flex",
} as const;

export const ANIMATIONS = {
  chevronRotate: "rotate-90 ",
  transitionDuration: "transition-all duration-300",
} as const;
