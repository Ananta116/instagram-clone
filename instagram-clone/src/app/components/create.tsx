"use client"
import { useRouter } from "next/navigation"

export default function CreatePost(){
    const router = useRouter()
    return (
        <div>
            <button 
            onClick={() => router.push("/createpost")}
            className="bg-pink-600 shadow-md w-[210px] h-[50px] rounded-md mt-[10px] hover:cursor-pointer hover:bg-pink-400">
                <p>CreatePost</p>
            </button>
        </div>
    )
}