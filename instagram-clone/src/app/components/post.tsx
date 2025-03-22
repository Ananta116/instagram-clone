import Image from "next/image";
import { FaRegHeart, FaRegCommentAlt } from "react-icons/fa";
import { RiTelegram2Line } from "react-icons/ri";

export interface IPost {
  id: number;
  caption: string;
  imageUrl: string;
  createdAt: string;
  user: IUsers;
}
export interface IUsers {
  id: number;
  username: string;
  avatar: string;
}

export default function InstagramPost({
  user,
  caption,
  imageUrl,
  createdAt,
}: IPost) {
  return (
    <div>
      <div className="bg-white shadow-md mx-[20px] p-3 mt-[10px]">
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full w-[50px] h-[50px]"
            src={user.avatar}
            alt={user.username}
            width={50}
            height={50}
          />
          <p className="text-black text-[15px] font-bold">{user.username}</p>
          <p className="text-[15px] text-gray-300 subpixel-antialiased">
            {createdAt}
          </p>
        </div>
        <Image
          className="rounded-md mt-[10px]"
          src={imageUrl}
          alt={caption}
          width={500}
          height={500}
        />
        <div className="flex gap-3 mt-[10px]">
          <FaRegHeart color="black" size={20} />
          <FaRegCommentAlt color="black" size={20} />
          <RiTelegram2Line color="black" size={20} />
        </div>
        <div className="flex gap-1 mt-[10px]">
          <p className="font-bold text-black subpixel-antialiased">
            {user.username}
          </p>
          <p className=" text-black">{caption}</p>
        </div>
      </div>
    </div>
  );
}
