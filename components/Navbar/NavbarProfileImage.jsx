import Image from "next/image";
import profileImg from "@/public/images/noProfileImg.png"
import { verifySession } from "@/lib/dal";
import { getUserData } from "@/lib/actions";

async function NavbarProfileImage() {
    const session = await verifySession();
    const userProfileImage = session ?  await getUserData() : null;
    const profileImage = userProfileImage?.image || profileImg;
  return (
    <div
    className="w-[60px] h-[60px] relative border-none hover:scale-105 transition ease-in-out duration-200"
    >
      <Image className="rounded-full" src={profileImage} alt="user-image" fill sizes="60px"/>    
    </div>
  )
}

export default NavbarProfileImage
