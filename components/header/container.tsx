import { NAV_ITEMS, NAV_STYLES } from "@/constants";
import { PhoneCall } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui";
import { MobileMenu, NavItem } from "./index";

export function HeaderContainer() {
  return (
    <header
      className="flex flex-row items-center justify-between px-6 md:px-10 flex-wrap lg:flex-nowrap gap-4 relative"
      style={{
        boxShadow: "0px 0px 25px -6px #000000",
      }}
    >
      <section className=" flex-row  flex items-center justify-center font-bold py-4  lg:text-3xl text-foreground uppercase">
        <Image
          src="/assets/Logo.png"
          alt="Company Logo"
          width={64}
          height={64}
        />
        <div className="flex-row gap-2 hidden lg:flex">
          <span className="text-white">plumbing</span>
          <span className="text-[#5c97c4]">services</span>
        </div>
      </section>

      <section className="hidden md:flex items-center justify-center gap-4 inset-0 ">
        <nav className={`flex ${NAV_STYLES.navGap} ${NAV_STYLES.navText}`}>
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.label}
              label={item.label}
              href={item.href}
              submenu={item.submenu}
            />
          ))}
        </nav>
      </section>

      <div className="flex flex-row gap-4">
        <MobileMenu />

        <section className="hidden md:flex flex-row items-center gap-2">
          <div className="p-3 bg-[#064180] rounded-full">
            <PhoneCall size={22} color="white" />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-xs">24/7 Emergence Call</span>
            <span className="text-white font-bold">123-456-7890</span>
          </div>
        </section>
        <section>
          <Button variant="primary" className="px-4 py-2">
            Get a Quote
          </Button>
        </section>
      </div>
    </header>
  );
}
