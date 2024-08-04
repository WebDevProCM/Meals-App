import profileImg from "@/public/images/noProfileImg.png"
import { UpdateUserProfile } from "@/components/User/UpdateUserProfile" ;
import { getUserData } from "@/lib/actions";
import Image from "next/image";

async function ProfileSection() {
    const user = await getUserData();
    user._id = typeof user?._id === "string" ? user?._id : user?._id.toHexString()
    const userObject = {
        _id: user?._id,
        name: user?.name,
        email: user?.email,
        image: user?.image
    }
    const userImage = userObject?.image === "noImage.jpg" ? profileImg : userObject?.image;
  return (
    <div className="flex relative justify-center items-center max-w-[800px] mx-auto sm:mt-[-40px] mt-[-20px] gap-5 z-30">
        <div className="flex flex-col items-end justify-end sm:text-[40px] text-[30px] font-bold text-white">
            <h1>{userObject.name}</h1>
            <UpdateUserProfile user={userObject}/>
        </div>
        <div className="sm:w-[150px] sm:h-[150px] w-[100px] h-[100px] relative">
            <Image 
            className="rounded-full border-[7px] border-orange-400" 
            src={userImage} 
            alt="profile-image" 
            sizes="(max-width: 750px) 100px, 150px"
            fill />
        </div>
    </div>
  )
}

export default ProfileSection