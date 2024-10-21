import Link from "next/link";
import React from "react";
import { RiMenu3Fill } from "react-icons/ri";

export default function Header() {
  const menuItems = ["Home", "About", "Projects", "Contact"];

  const menuitems = [
    { name: "Home", redirect: "home" },
    { name: "About", redirect: "about" },
    { name: "Projects", redirect: "projects" },
    { name: "Contact", redirect: "contact" },
  ];
  return (
    <header className="flex fixed items-center justify-end inset-x-0 inset-y-0 h-20">
      <ul className="hidden sm:flex h-full px-10  py-8 gap-5 font-semibold">
        {menuitems.map((item, index) => (
          <Link href={`#${item.redirect}`} key={index}>
            <li className="hover:text-red-500 cursor-pointer transition-colors duration-300">
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
      <RiMenu3Fill className="sm:hidden h-5 w-5 m-5" />
    </header>
  );
}
