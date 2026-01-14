"use client";

import { ANIMATIONS, NAV_STYLES } from "@/constants/navigation";
import { INavItemProps } from "@/interface";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useCallback, useState } from "react";

let currentOpenItem: string | null = null;

export function NavItem({ label, href, submenu }: INavItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => {
      const newState = !prev;

      if (newState) {
        if (currentOpenItem && currentOpenItem !== label) {
          window.dispatchEvent(
            new CustomEvent("closeNavItem", { detail: { exclude: label } })
          );
        }
        currentOpenItem = label;
      } else {
        currentOpenItem = null;
      }

      return newState;
    });
  }, [label]);

  React.useEffect(() => {
    const handleCloseOther = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail.exclude !== label) {
        setIsOpen(false);
      }
    };

    window.addEventListener("closeNavItem", handleCloseOther);
    return () => {
      window.removeEventListener("closeNavItem", handleCloseOther);
    };
  }, [label]);

  return (
    <div className="relative group z-[12] ">
      <div
        className={`flex items-center gap-1 ${NAV_STYLES.itemGap} cursor-pointer pb-2 ${ANIMATIONS.transitionDuration}`}
        onClick={toggleDropdown}
      >
        <Link href={href} className="hover:text-orange-400 transition-colors">
          {label}
        </Link>
        <ChevronDown
          size={NAV_STYLES.chevronSize}
          className={`mr-4 ${ANIMATIONS.transitionDuration} ${
            isOpen ? "rotate-180" : ""
          }`}
        />

        <div
          className={`absolute bottom-0 left-0 right-0 ${
            NAV_STYLES.underlineHeight
          } bg-gradient-to-r from-orange-400 via-orange-300 to-transparent ${
            isOpen ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          } group-hover:opacity-100 group-hover:scale-x-100 ${
            ANIMATIONS.transitionDuration
          } origin-left`}
        />
      </div>

      {submenu && (
        <div
          className={`absolute top-full left-0 mt-2 bg-gray-900 rounded-md shadow-lg overflow-hidden ${
            ANIMATIONS.transitionDuration
          } ${
            isOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          {submenu.map((item, index) => (
            <Link
              key={index}
              href="#"
              className="block px-4 py-2 text-white text-sm hover:bg-orange-400 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
