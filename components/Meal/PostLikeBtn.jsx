"use client"

import { toggleLikeStatus } from "@/lib/actions";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { toast } from "react-toastify";

function PostLikeBtn({meal}) {
  const clickHandler = async (id, action) =>{
    const result = await toggleLikeStatus(id);
    if(result.error){
      return toast.error(result.error);
    }
  }

  return (

    <div className='flex justify-center items-center w-full'>
            
    <button className={`flex justify-center items-center grow py-[10px] ${meal.liked? "bg-glassHover" :"bg-glass"}
    backdrop-blur-[30px] hover:bg-glassHover`}
    onClick={() => {clickHandler(`${meal._id}`)}}
    >
      <AiFillLike /> {meal.liked ? "Liked" : "Like"} {meal.likes.length}
    </button>
    {/* <button className={`flex justify-center items-center grow py-[10px] ${meal.disliked? "bg-glassHover" :"bg-glass"}
     backdrop-blur-[30px hover:bg-glassHover`}
    onClick={() => {clickHandler(`${meal._id}`, "dislike")}}
    >
      <AiFillDislike /> {meal.disliked ? "DisLiked" : "DisLike"}
    </button> */}

    </div>

  )
}

export default PostLikeBtn