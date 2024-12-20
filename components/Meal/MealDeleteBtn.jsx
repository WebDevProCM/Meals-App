"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { removeMealAction } from "@/lib/actions";
import toast from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";
import { motion } from "framer-motion";
  
export function MealDeleteBtn({mealId}) {
  const clickHanlder = async (event)=>{
    const result = await removeMealAction(mealId);
    if(result?.error){
      return toast.error(result?.error);
    }
    return toast.success("Removing recipe post....");
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <motion.button 
        variant="outline"
        whileHover={{scale: 1.1}}
        transition={{duration: 0.5, type: "spring"}}
        >
          <MdDeleteForever size={18} />
        </motion.button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            recipe post.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={clickHanlder}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
  