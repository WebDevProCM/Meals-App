"use client"
import {
    Tabs,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
  TabsContent,
} from "@/components/ui/tabs"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function LoginSignupForm() {

  return (
    <Tabs defaultValue="login" className="sm:w-[400px] w-[300px] z-20">
    <TabsList className="grid w-full grid-cols-2">
      <TabsTrigger value="login">Login</TabsTrigger>
      <TabsTrigger value="signup">Sign Up</TabsTrigger>
    </TabsList>
    <TabsContent value="login">
      <LoginForm />
    </TabsContent>
    <TabsContent value="signup">
      <SignupForm />
    </TabsContent>
    </Tabs>
  )
}

export default LoginSignupForm