import { Loader2 } from "lucide-react"
import { useFormStatus } from 'react-dom'
import { Button } from "@/components/ui/button"

function ProfileUpdateSubmitBtn() {
    const {pending} = useFormStatus();
  return (
    <>
        {pending?
            <Button type="submit" disabled>Saving changes...<Loader2 className="mr-2 h-4 w-4 animate-spin" /></Button>
        :
            <Button type="submit">Save changes</Button>
        }
    </>
  )
}

export default ProfileUpdateSubmitBtn