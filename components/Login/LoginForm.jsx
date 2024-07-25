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
import LoginSignupFormbtn from "./loginSignupFormbtn"
import {useFormState} from "react-dom";
import { loginUser } from "@/lib/auth"

function LoginForm() {
   const [formState, formAction] = useFormState(loginUser, null);

  return (
    <Card>
      <form action={formAction}>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your email and password to login.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" placeholder="Email" />
          {formState?.errors?.email && <p className="text-red-500">{formState?.errors?.email}</p>}
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" name="password" placeholder="Type your password" required/>
          {formState?.errors?.password && <p className="text-red-500">{formState?.errors?.password}</p>}
        </div>
      </CardContent>
      <CardFooter>
        <LoginSignupFormbtn login={true} />
        {formState?.error && <p className="text-red-500 ml-3 font-bold">{formState?.error}</p>}
      </CardFooter>
      </form>
    </Card>
  )
}

export default LoginForm