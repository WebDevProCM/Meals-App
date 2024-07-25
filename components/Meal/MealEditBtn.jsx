"use client"

import {useFormState} from "react-dom"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FaEdit } from "react-icons/fa";
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea";
import { Label } from "@/components/ui/label"
import { updateMealAction } from "@/lib/actions";
import { MealUpdateBtn } from "./MealUpdateBtn";
import toast from "react-hot-toast";

export function MealEditBtn({meal}) {
  const [formState, formAction] = useFormState(updateMealAction, null);

  if(formState?.error){
    return toast.error(formState?.error);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button><FaEdit /></button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Meal Receipe</DialogTitle>
          <DialogDescription>
           Make changes to your receipe here. Click save when you &#39; re done.
          </DialogDescription>
        </DialogHeader>
        <form action={formAction}>
        <div className="grid gap-4 py-4">

          <input type="hidden" name="id" value={meal._id} />
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              name="title"
              defaultValue={meal.title}
              className="col-span-3"
              />
            {formState?.errors?.title && <p className="text-red-500 col-span-3">{formState?.errors?.title}</p>}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="summary" className="text-right">
              Summary
            </Label>
            <Input
              id="summary"
              name="summary"
              defaultValue={meal.summary}
              className="col-span-3"
              />
            {formState?.errors?.summary && <p className="text-red-500 col-span-3">{formState?.errors?.summary}</p>}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="instructions">Instructions</Label>
            <Textarea className="col-span-4" defaultValue={meal.instructions} id="instructions" name="instructions"/>
            {formState?.errors?.instructions && <p className="text-red-500 col-span-3">{formState?.errors?.instructions}</p>}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image">Upload New Image</Label>
            <Input className="col-span-3" id="image" type="file" name="image" />
            {formState?.errors?.image && <p className="text-red-500 col-span-3">{formState?.errors?.image}</p>}
          </div>
        </div>
        <DialogFooter>
          <MealUpdateBtn />
          {formState?.error?._id && <p className="text-red-500">{formState?.error?._id}</p>}
          {formState?.error && <p className="text-red-500">{formState?.error}</p>}
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
