import { useFormStatus } from 'react-dom'
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useState } from 'react';

function LoginSignupFormbtn({login}) {
    const {pending} = useFormStatus();

  return (
    <>
    {pending?
        <Button type="submit" disabled>{login? "Loggin..." : "Creating Account..."}<Loader2 className="mr-2 h-4 w-4 animate-spin" /></Button>
        :
        <Button type="submit">{login? "Login" : "Create Account"}</Button>
    }
    </>
  )
}

export default LoginSignupFormbtn