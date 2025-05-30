import { nunito } from "@/app/fonts/fonts";
import { navLinks } from "@/constant/constants";
import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div>
      {/* overlay */}
      {showNav && (
        <div
          onClick={closeNav}
          className="fixed inset-0 z-[1000] bg-black opacity-70 w-full h-screen"
        />
      )}

      {/* mobile nav */}
      <div
        className={`fixed top-0 right-0 h-full ${navOpen} transition-transform duration-500 delay-100 z-[1050] bg-rose-900 w-[60%] sm:w-[30%] flex flex-col justify-center space-y-6`}
      >
        {navLinks.map((link) => (
          <Link href={link.url} key={link.id}>
            <p
              className={`relative ${nunito.className} text-white ml-10 pb-1 hover:text-indigo-300 text-base w-fit`}
              style={{ fontSize: "14px", fontWeight: "800" }}
            >
              {link.label}
            </p>
          </Link>
        ))}
        <IoClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MobileNav;
