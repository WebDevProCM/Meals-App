import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { logoutUser } from "@/lib/auth";
import Link from "next/link";
import { GiHotMeal } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";
import { verifySession } from "@/lib/dal";
   

async function NavProfileBarDropdown({children}) {
  const session = await verifySession()
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
        <DropdownMenuContent>
        <DropdownMenuLabel>
          <GiHotMeal className="inline-block" size={20}/>
          <p className="font-bold text-1xl">RECIPES SHARING APP</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/profile"><DropdownMenuItem className="cursor-pointer"><CgProfile size={18} className="inline-block"/>&nbsp;Profile</DropdownMenuItem></Link>
        <Link href="/meal" className="sm:hidden block">
          <DropdownMenuItem className="cursor-pointer"><RiCompassDiscoverLine size={18} className="inline-block"/>&nbsp;Discover Recipies</DropdownMenuItem>
        </Link>
        <Link href="/shareMeal" className="sm:hidden block">
          <DropdownMenuItem className="cursor-pointer"><FaRegShareFromSquare size={18} className="inline-block"/>&nbsp;Share Recipe</DropdownMenuItem>
        </Link>
        <DropdownMenuItem className="cursor-pointer">
          {session?
            <form action={logoutUser}>
              <button><FiLogOut size={18} className="inline-block"/> Log Out</button>
            </form>
              :
            <Link href="/"><CiLogin className="inline-block" size={18}/>Log In</Link> 
          }
          </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default NavProfileBarDropdown