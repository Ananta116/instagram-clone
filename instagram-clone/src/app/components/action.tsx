"use client";
import axios from "@/lib/axios";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaRegHeart, FaRegCommentAlt } from "react-icons/fa";
import { RiTelegram2Line } from "react-icons/ri";

interface IProps {
  likesCount: number;
  liked: boolean;
  postId: number;
}
export default function ActionButton({ likesCount, liked, postId }: IProps) {
  const [isLike, setIsLike] = useState<boolean>(liked || false);
  const [count, setCount] = useState<number>(likesCount || 0);
  const { data } = useSession()

  const onLike = async () => {
    try {
      await axios.post("/post/like", { postId }, {
        headers: {Authorization: `bearer ${data?.accessToken}`}
      });
      setIsLike(!isLike);
      setCount(isLike ? count - 1 : count + 1);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex gap-3 mt-[10px]">
      {isLike ? (
        <AiFillHeart onClick={onLike} color="red" size={20} />
      ) : (
        <FaRegHeart onClick={onLike} size={20} />
      )}
      <p className="text-black">{count} suka</p>
      <FaRegCommentAlt color="black" size={20} />
      <RiTelegram2Line color="black" size={20} />
    </div>
  );
}
