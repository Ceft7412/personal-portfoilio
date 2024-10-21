import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className=" bg-[#F8EE97] text-[#255D3A] p-2 py-10 sm:p-10 flex flex-col items-start sm:items-center gap-10 h-[500px]"
    >
      <h1 className="text-[40px] font-bold font-interphase">ABOUT ME</h1>
      <div className="font-medium text-[35px] flex flex-col items-center self-center  justify-center flex-1 h-full">
        <p>I'M A VERY DEDICATED INDIVIDUAL.</p>
        <p>HARDWORK IS MY THING.</p>
      </div>
    </section>
  );
}
