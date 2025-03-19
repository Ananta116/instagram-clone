import Image from "next/image";
import { FaRegHeart,FaRegCommentAlt } from "react-icons/fa";
import { RiTelegram2Line } from "react-icons/ri";
export default function InstagramPost() {
  const post = [
    {
      username: "ProPlayerBoblox21",
      caption: "Roblox dulu gais",
      image: "/content1.png",
      pp: "/pp1.png",
    },
    {
      username: "NoobRoblox",
      caption: "Kebun Binatang",
      image: "/content2.png",
      pp: "/pp2.png",
    },
  ];
  return (
    <div>
      {post.map((posts, index) => (
        <div key={index} className="bg-white shadow-md mx-[20px] p-3 mt-[10px]">
          <div className="flex items-center gap-2">
            <Image
              className="rounded-full"
              src={posts.pp}
              alt={posts.username}
              width={50}
              height={50}
            />
            <p className="text-black text-[15px] font-bold">{posts.username}</p>
            <p className="text-[15px] text-gray-300 subpixel-antialiased">
              10 menit yang lalu
            </p>
          </div>
          <Image
            className="rounded-md mt-[10px]"
            src={posts.image}
            alt={posts.username}
            width={500}
            height={500}
          />
          <div className="flex gap-3 mt-[10px]">
            <FaRegHeart color="black" size={20}/>
            <FaRegCommentAlt color="black" size={20}/>
            <RiTelegram2Line color="black" size={20}/>
          </div>
          <div className="flex gap-1 mt-[10px]">
            <p className="font-bold text-black subpixel-antialiased">
              {posts.username}
            </p>
            <p className=" text-black">{posts.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
