import Image from "next/image";
import { convertTime } from "../utils/time";
import ActionButton from "./action";

export interface IPost {
  id: number;
  caption: string;
  imageUrl: string;
  createdAt: string;
  user: IUsers;
  liked: boolean;
  likeCount: number;
  postId: number;
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
  likeCount,
  liked,
  postId,
}: IPost) {
  return (
    <div>
      <div className="bg-white shadow-md mx-[20px] p-3 mt-[10px]">
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full w-[50px] h-[50px]"
            src={user.avatar || "/content2.png"}
            alt={user.username}
            width={50}
            height={50}
          />
          <p className="text-black text-[15px] font-bold">{user.username}</p>
          <p className="text-[15px] text-gray-300 subpixel-antialiased">
            {convertTime(createdAt)}
          </p>
        </div>
        <Image
          className="rounded-md mt-[10px]"
          src={imageUrl}
          alt={caption}
          width={500}
          height={500}
        />
        <ActionButton likesCount={likeCount} liked={liked} postId={postId} />
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
