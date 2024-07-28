import profileImg from "@/public/images/image1.jpg"
import { UpdateUserProfile } from "@/components/User/UpdateUserProfile" ;
import { getUserData } from "@/lib/actions";
import Image from "next/image";

async function ProfileSection() {
    const user = await getUserData();
    user._id = typeof user._id === "string" ? user._id : user._id.toHexString()
    const userObject = {
        _id: user._id,
        name: user.name,
        email: user.email,
        image: user.image
    }

  return (
    <div className="flex relative justify-center items-center max-w-[800px] mx-auto sm:mt-[-40px] mt-[-20px] gap-5 z-30">
        <div className="flex flex-col gap-1 items-end justify-end sm:text-[30px] text-[25px] font-bold text-white">
            <h1>{userObject.name}</h1>
            <UpdateUserProfile user={userObject}/>
        </div>
        <div className="sm:w-[150px] sm:h-[150px] w-[100px] h-[100px] relative">
            <Image className="rounded-full" src={profileImg} alt="profile-image" fill />
        </div>
    </div>
  )
}

export default ProfileSection