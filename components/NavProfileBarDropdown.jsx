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
  

function NavProfileBarDropdown({children}) {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
        <DropdownMenuContent>
        <DropdownMenuLabel><GiHotMeal size={20}/></DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/profile"><DropdownMenuItem>Profile</DropdownMenuItem></Link>
        <Link href="/meal" className="sm:hidden block">
          <DropdownMenuItem>Discover Recipies</DropdownMenuItem>
        </Link>
        <Link href="/shareMeal" className="sm:hidden block">
          <DropdownMenuItem>Share Recipe</DropdownMenuItem>
        </Link>
        <DropdownMenuItem>
          <form action={logoutUser}>
            <button>Log Out</button>
          </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default NavProfileBarDropdown