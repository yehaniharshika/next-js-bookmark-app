import { navLinks } from "@/constant/constants";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GiNotebook } from "react-icons/gi";
import { nunito } from "@/app/fonts/fonts";
import { HiMenuAlt1 } from "react-icons/hi";

type Props = {
  openNav: () => void;
};

const Navbar = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll",handler);
  }, []);

  return (
    <div className= {` ${navBg?'bg-rose-900 shadow:md':'fixed'} transition-all duration-200 h-[9vh] z-[1000] fixed w-full`}>
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center">
            <GiNotebook className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl md:text-2xl text-white uppercase font-bold">
            Pinfolio
          </h1>
        </div>

        {/* nav links - show only on md and up */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id}>
              <p
                className={`relative ${nunito.className} text-white hover:text-pink-300 text-base w-fit`}
                style={{ fontSize: "14px", fontWeight: "800" }}
              >
                {link.label}
              </p>
            </Link>
          ))}
        </div>

        {/* menu icon - show only on small screens */}
        <HiMenuAlt1
          onClick={openNav}
          className="w-6 h-6 cursor-pointer text-white md:hidden"
        />
      </div>
    </div>
  );
};

export default Navbar;
