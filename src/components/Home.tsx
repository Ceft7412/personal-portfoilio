"use client";
import { information } from "../resources/basicInfo";
import splitStringUsingRegex from "@/utils/splitStringUsingRegex";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  const greeting = splitStringUsingRegex("HELLO, IM");
  const nameChars = splitStringUsingRegex(information.fullName);

  // Variant for both.
  const charVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <section
      id="home"
      className="bg-[#273316] text-[#f2a156] min-h-screen flex items-center justify-center p-2"
    >
      <div className="flex flex-col items-start sm:items-center font-interphase w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.08 }}
          className="font-extralight text-[20px] sm:text-[25px]"
        >
          {greeting.map((char, index) => (
            <motion.span
              key={index}
              transition={{ duration: 0.5 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.08 }}
          className={`font-bold text-[32px] sm:text-[40px] md:text-[50px]`}
        >
          {nameChars.map((char, index) => (
            <motion.span
              key={index}
              transition={{ duration: 0.5 }}
              variants={charVariants}
            >
              {char.toUpperCase()}
            </motion.span>
          ))}
        </motion.h1>
        <footer className="absolute bottom-0 px-4 py-5">
          <span>{new Date().getFullYear()}</span>
        </footer>
      </div>
    </section>
  );
}
