import Image from "next/image";
import profileImg from "@/public/images/noProfileImg.png"
import { verifySession } from "@/lib/dal";
import { getUser } from "@/lib/user";

async function NavbarProfileImage() {
    const session = await verifySession();
    const user = await getUser(session?.userId);
  return (
    <>
    <Image className="rounded-full" src={profileImg} alt="user-image" fill/>    
    </>
  )
}

export default NavbarProfileImage
