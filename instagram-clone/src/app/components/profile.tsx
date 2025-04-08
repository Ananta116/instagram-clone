import { auth } from "@/lib/auth";
import Image from "next/image";
import Logout from "./logoutbutton";


export default async function Profile() {
  const session = await auth();
  return (
    <div className="flex gap-5 w-[210px] h-[100px] items-center justify-center shadow-md rounded-md mt-[10px]">
      <Image
        className="rounded-full w-[50px] h-[50px]"
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxaNvwuqtjrmHr7wCFocgIPLOzr8Z84tP4aA&s"
        }
        alt="avatar"
        width={50}
        height={50}
      />
      <h1 className="text-black">{session?.user?.username}</h1>
      <Logout/>
    </div>
  );
}
