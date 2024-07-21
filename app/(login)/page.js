import { Button } from "@/components/ui/button"
import { GiFullPizza } from "react-icons/gi";
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
import Link from "next/link";

export default async function Home() {

  return (
    <main className="flex sm:flex-row sm:flex-wrap flex-col justify-center items-center h-screen">
    
    <div className="sm:basis-1/2 sm:min-w-[500px] sm:h-full flex flex-col gap-10 flex-grow w-full h-2/6 relative 
    bg-left-banner bg-cover bg-no-repeat justify-center items-center p-5">
      <div className="z-20 flex justify-center items-center">
        <h1 className="font-pacifico z-30 text-2xl font-bold text-gray-200 max-w-[300px]">
          <span className="text-[60px]">Welcome </span> 
          To Food Receipies Sharing App!
        </h1>

        <GiFullPizza size={60}/>
      </div>
      <div className="z-20 flex flex-col justify-center items-center gap-1">
        <Link href="/meal">
        <button className="before:ease relative h-12 w-60 overflow-hidden border border-glass shadow-2xl 
        before:absolute before:left-0 before:-ml-2 before:h-[272px] before:w-[272px] before:origin-top-right 
        before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all 
        before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180 text-orange-500
        font-bold font-pacifico bg-glassHover"
        >
        <span className="relative z-10">Discover Recipies</span>
        </button>
        </Link>
        <h5 className="font-bold font-fairplay">You can explore recipies without loggin!</h5>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
    </div>

    <div className="relative flex sm:basis-1/2 sm:min-w-[500px] flex-grow w-full h-screen justify-center items-center bg-right-banner bg-cover bg-no-repeat">
      <Tabs defaultValue="account" className="sm:w-[400px] w-[300px] z-20">
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
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-lg"></div>
    </div>

    </main>
  );
}
