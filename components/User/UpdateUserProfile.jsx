"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import useMediaQuery from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaUserEdit } from "react-icons/fa";
import ProfileUpdateSubmitBtn from "./ProfileUpdateSubmitBtn"
import {useFormState} from "react-dom";
import { updateUser } from "@/lib/actions"
import toast from "react-hot-toast"
import { motion } from "framer-motion"

export function UpdateUserProfile({user}) {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery()

  if (isDesktop === "desktop") {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <motion.button
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5 ,type: "spring"}}
          >
            <FaUserEdit size={20}/>
          </motion.button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&#39;re done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm user={user}/>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <motion.button
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5 ,type: "spring"}}
        >
          <FaUserEdit size={20}/>
        </motion.button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you&#39;re done.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" user={user}/>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function ProfileForm({ className, user}) {
  const [formState, formAction] = useFormState(updateUser, null);
  if(formState?.error){
    toast.error(formState?.error);
  }

  return (
    <form action={formAction} className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" defaultValue={user.email} name="email" disabled/>
        <p>You cannot change your email address!</p>
        {formState?.errors?.email && <p className="text-red-500">{formState?.errors?.email}</p>}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue={user.name} name="name"/>
        {formState?.errors?.name && <p className="text-red-500">{formState?.errors?.name}</p>}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="image">Profile Image</Label>
        <Input id="image" name="image" type="file"/>
        {formState?.errors?.image && <p className="text-red-500">{formState?.errors?.image}</p>}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Change Password</Label>
        <Input id="password" placeholder="Type your new password" name="password"/>
        {formState?.errors?.password && <p className="text-red-500">{formState?.errors?.password}</p>}
      </div>
      <ProfileUpdateSubmitBtn />
    </form>
  )
}
