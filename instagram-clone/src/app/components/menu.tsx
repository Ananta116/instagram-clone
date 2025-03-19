import Image from "next/image";
import { IoMdHome } from "react-icons/io";
import { IoSearch, IoNotifications } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { BsPersonVideo2 } from "react-icons/bs";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

export default function Sidemenu() {
  return (
      <div role="menu" className="border shadow-md w-[300px] h-screen sticky top-0">
        <Image
          className="w-[150px] mt-[50px] ml-[30px]"
          src={"/images.png"}
          alt="instagrampic"
          width={1080}
          height={500}
        />
        <div className="flex items-center gap-2 mt-[50px] ml-[30px]">
          <IoMdHome size={35} color="black" />
          <p className="text-black text-[18px]">Home</p>
        </div>
        <div className="flex items-center gap-2 mt-[30px] ml-[30px]">
          <IoSearch size={35} color="black" />
          <p className="text-black text-[18px]">Search</p>
        </div>
        <div className="flex items-center gap-2 mt-[30px] ml-[30px]">
          <MdOutlineExplore size={35} color="black" />
          <p className="text-black text-[18px]">Explore</p>
        </div>
        <div className="flex items-center gap-2 mt-[30px] ml-[30px]">
          <BsPersonVideo2 size={35} color="black" />
          <p className="text-black text-[18px]">Reels</p>
        </div>
        <div className="flex items-center gap-2 mt-[30px] ml-[30px]">
          <BiSolidMessageSquareDetail size={35} color="black" />
          <p className="text-black text-[18px]">Messages</p>
        </div>
        <div className="flex items-center gap-2 mt-[30px] ml-[30px]">
          <IoNotifications size={35} color="black" />
          <p className="text-black text-[18px]">Notifications</p>
        </div>
        <div className="flex items-center gap-2 mt-[30px] ml-[30px]">
          <CgProfile size={35} color="black" />
          <p className="text-black text-[18px]">Profile</p>
        </div>
      </div>
  );
}
