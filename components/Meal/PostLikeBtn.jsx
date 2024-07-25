"use client"

import {useOptimistic} from "react";
import { toggleLikeStatus } from "@/lib/actions";
import toast from "react-hot-toast";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

function PostLikeBtn({meal}) {
  const [optimisticLikeBtn, updateOptimisticLikeBtn] = useOptimistic(meal, (prevState, updateMeal) =>{
    let newMealUpdate = {...prevState};
    updateMeal.liked? newMealUpdate.likes.pop() : newMealUpdate.likes.push(1);
    newMealUpdate.liked = !newMealUpdate.liked;
    console.log(newMealUpdate);
    return newMealUpdate;
  })

  const clickHandler = async (optimisticMeal) =>{
    updateOptimisticLikeBtn(optimisticMeal);
    const result = await toggleLikeStatus(optimisticMeal._id);
    if(result?.error){
      return toast?.error(result?.error);
    }
  }

  return (

    <div className='flex justify-center items-center w-full'>
      
    <button className={`flex justify-center items-center grow py-[10px] ${optimisticLikeBtn.liked? "bg-glassHover" :"bg-glass"}
    backdrop-blur-[30px] hover:bg-glassHover`}
    onClick={() => {clickHandler(optimisticLikeBtn)}}
    >
      <AiFillLike /> {optimisticLikeBtn.liked ? "Liked" : "Like"} {optimisticLikeBtn.likes.length}
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
