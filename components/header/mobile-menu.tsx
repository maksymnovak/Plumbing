"use client";

import { NAV_ITEMS } from "@/constants/navigation";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  return (
    <div className="md:hidden ">
      <button
        onClick={toggleMenu}
        className=" relative right-2 top-1 p-2 hover:bg-gray-700 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X size={24} color="white" />
        ) : (
          <Menu size={24} color="white" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-900 shadow-lg z-50">
          <nav className="flex flex-col p-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="text-white py-2 px-4 text-sm font-semibold hover:text-orange-400 transition-colors block flex-1"
                    onClick={() => !item.submenu && setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                    >
                      {expandedItem === item.label ? "−" : "+"}
                    </button>
                  )}
                </div>

                <div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-400 to-transparent origin-left transition-all duration-300"
                  style={{
                    width: "0%",
                    opacity: 0,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.width = "100%";
                    (e.currentTarget as HTMLElement).style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.width = "0%";
                    (e.currentTarget as HTMLElement).style.opacity = "0";
                  }}
                />

                {item.submenu && expandedItem === item.label && (
                  <div className="bg-gray-800 rounded-md overflow-hidden">
                    {item.submenu.map((subitem, index) => (
                      <Link
                        key={index}
                        href="#"
                        className="block px-6 py-2 text-gray-300 text-sm hover:bg-orange-400 hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {subitem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
