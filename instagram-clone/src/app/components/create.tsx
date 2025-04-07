"use client"
import { useRouter } from "next/navigation"

export default function CreatePost(){
    const router = useRouter()
    return (
        <div>
            <button 
            onClick={() => router.push("/createpost")}
            className="bg-sky-400 shadow-md w-[100px] h-[50px] rounded-md mt-[50px] ml-[100px] hover:cursor-pointer hover:bg-sky-200">
                <p>CreatePost</p>
            </button>
        </div>
    )
}