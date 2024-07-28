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
  

function NavProfileBarDropdown({children}) {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
        <DropdownMenuContent>
        <DropdownMenuLabel><GiHotMeal size={20}/></DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/profile"><DropdownMenuItem><CgProfile size={18} className="inline-block"/>&nbsp;Profile</DropdownMenuItem></Link>
        <Link href="/meal" className="sm:hidden block">
          <DropdownMenuItem><RiCompassDiscoverLine size={18} className="inline-block"/>&nbsp;Discover Recipies</DropdownMenuItem>
        </Link>
        <Link href="/shareMeal" className="sm:hidden block">
          <DropdownMenuItem><FaRegShareFromSquare size={18} className="inline-block"/>&nbsp;Share Recipe</DropdownMenuItem>
        </Link>
        <DropdownMenuItem>
          <form action={logoutUser}>
            <button><FiLogOut size={18} className="inline-block"/> Log Out</button>
          </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default NavProfileBarDropdown