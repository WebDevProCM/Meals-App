"use client"

import {useFormState} from "react-dom"
import { Button } from "@/components/ui/button"
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
import { toast } from "react-toastify";

export function MealEditBtn({meal}) {
  const [formState, formAction] = useFormState(updateMealAction, {message: null});

  if(formState.message){
    return toast.error(formState.message.error);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button variant="outline"><FaEdit /></button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Meal Receipe</DialogTitle>
          <DialogDescription>
           Make changes to your receipe here. Click save when you're done.
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
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="instructions">Instructions</Label>
            <Textarea className="col-span-4" defaultValue={meal.instructions} id="instructions" name="instructions"/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image">Upload New Image</Label>
            <Input className="col-span-3" id="image" type="file" name="image" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
          {formState.message && <p>{formState.message.error}</p>}
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
