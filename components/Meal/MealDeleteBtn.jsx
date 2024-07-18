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
  import { Button } from "@/components/ui/button"
import { removeMealAction } from "@/lib/actions";
  import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";
  
export function MealDeleteBtn({mealId}) {
  const clickHanlder = async ()=>{
    const result = await removeMealAction(mealId);
    if(result.error){
      return toast.error(result.error);
    }
    return toast.warn("Meal Post Removed!");
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button variant="outline"><MdDeleteForever size={18} /></button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            Meal Post.
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
  