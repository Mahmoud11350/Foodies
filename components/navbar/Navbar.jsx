import logoImg from "@/assets/logo.png";
import Image from "next/image";
import Navlink from "@/lib/Navlink";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="container flex items-center justify-center relative z-10 flex-wrap lg:justify-between gap-2">
      <div className=" flex items-center justify-between gap-6">
        <Image src={logoImg} className="w-[100px]" alt="logo Img" />
        <div className="uppercase text-2xl  lg:text-4xl text-[#DDD6CB] font-bold">
          <Link href={"/"}>NextLevel Food</Link>
        </div>
      </div>
      <div>
        <ul className="flex items-center justify-between gap-1 lg:gap-4">
          <li className="text-xl lg:text-xl text-[#DDD6CB] ">
            <Navlink href={"/meals"}>Browse Meals</Navlink>
          </li>
          <li className="text-xl lg:text-xl text-[#DDD6CB] ">
            <Navlink href={"/community"}>Foodies Community</Navlink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
