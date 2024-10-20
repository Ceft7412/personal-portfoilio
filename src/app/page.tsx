import Image from "next/image";
import { information } from "../resources/basicInfo";

export default function Home() {
  return (
    <section className="bg-[#273316] text-[#f2a156] min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-start md:items-center">
        <span className="">HELLO, IM</span>
        <h1 className="font-bold text-[30px]">
          {information.fullName.toUpperCase()}
        </h1>
      </div>
    </section>
  );
}
