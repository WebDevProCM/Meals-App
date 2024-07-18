import { Button } from "@/components/ui/button"
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Image from "next/image"
import img from "@/public/images/loginPageimg.jpg"

export default async function Home() {

  return (
    <main className="flex sm:flex-row flex-col justify-center items-center">
    
    <div className="basis-2/4 flex-grow h-screen relative">
      <img className="w-full h-full object-cover" src={img.src} alt="meal image"/>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>

    <div className="flex basis-2/4 h-screen justify-center items-center bg-right-banner bg-cover bg-no-repeat">
      <Tabs defaultValue="account" className="w-[400px] mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Enter your email and password to login.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" placeholder="Type your password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>
                Enter your details to create a account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="Username">Username</Label>
                <Input type="text" id="Username" placeholder="Enter your username" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">New Password</Label>
                <Input type="password" id="password" placeholder="Enter your password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Create Account</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>

    </main>
  );
}
