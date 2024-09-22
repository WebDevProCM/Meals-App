import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import LoginSignupFormbtn from "@/components/Login/LoginSignupFormbtn"
import {useFormState} from "react-dom";
import { createUser } from "@/lib/actions"

function SignupForm() {
    const [formState, formAction] = useFormState(createUser, null);

  return (
    
    <Card>
      <form action={formAction}>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>
          Enter your details to create a account.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="Username">Username</Label>
          <Input type="text" id="Username" name="name" placeholder="Enter your username" />
          {formState?.errors?.name && <p className="text-red-500">{formState?.errors?.name}</p>}
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" placeholder="Enter your email" />
          {formState?.errors?.email && <p className="text-red-500">{formState?.errors?.email}</p>}
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">New Password</Label>
          <Input type="password" id="password" name="password" placeholder="Enter your password" />
          {formState?.errors?.password && <p className="text-red-500">{formState?.errors?.password}</p>}
        </div>
      </CardContent>
      <CardFooter>
          <LoginSignupFormbtn login={false}/>
          {formState?.error && <p className="text-red-500 ml-3 font-bold">{formState?.error}</p>}
      </CardFooter>
      </form>
    </Card>
  )
}

export default SignupForm