import Image from 'next/image'
import moment from 'moment';
import { GiCook } from "react-icons/gi";
import userImg from "@/public/images/noProfileImg.png"
import Link from 'next/link';
import { MealEditBtn } from '@/components/Meal/MealEditBtn';
import { MealDeleteBtn } from '@/components/Meal/MealDeleteBtn';
import PostLikeBtn from '@/components/Meal/PostLikeBtn';

function MealPost({meal, editBtn}) {
  const createdLocal = moment.utc(meal.createdAt).local();
  const createdDate = createdLocal.format("YYYY-MM-DD");
  const createdTime = createdLocal.format("HH.mm A");
  let {_id, title, summary, instructions, image, user, likes, liked} = meal;
  _id = typeof _id === 'string' ? _id : _id.toHexString();
  user._id = typeof user._id === 'string' ? user._id : user._id.toHexString();

  const objectMeal = {
    _id,
    title,
    summary,
    instructions,
    image,
    likes,
    liked,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      image: user.image
    }
  }
  const postUserImage = objectMeal.user.image === "noImage.jpg"? userImg : objectMeal.user.image;
  return (
    <div className='rounded-[15px] max-w-[400px] mx-auto text-[#ddd6cb] bg-grad
      bg-gradient-to-r from-[#2c1e19] to-[#25200f] overflow-hidden my-[30px]'>
        <div className='flex justify-between items-start px-[20px] py-[10px] gap-[10px]'>
          <div className='flex justify-start items-start gap-[10px]'>
            <div className='relative w-[40px] h-[40px] rounded-full'>
              <Image className='rounded-full' src={postUserImage} alt='user-picture' sizes='40px' fill/>
            </div>
            <div className='flex flex-col justify-center items-start'>
              <p className='uppercase font-montserrat font-bold'>{meal.user.name}</p>
              <p className='text-[9px]'>
                {createdDate} . {createdTime}
              </p>
            </div>
          </div>
            {editBtn && 
            <div className='flex items-center justify-center gap-1'>
              <MealEditBtn meal={objectMeal}/> 
              <MealDeleteBtn mealId={objectMeal._id}/>
            </div>
            }
        </div>
        <div className='flex justify-start items-center p-[15px] font-bold uppercase'>
            <p>{meal.title}</p>
        </div>
        <div className='relative w-[350px] h-[400px]'>
          <Image 
            className='max-w-full object-cover' 
            src={objectMeal.image} 
            alt='meal-image' 
            sizes='350px'
            fill/>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <button 
          className='flex justify-center items-center text-center w-full py-[10px] border-b border-glassBorder hover:bg-glassHover'
          >
            <GiCook />
            <Link href={`/meal/${meal.title}`}>
              View Recipe
            </Link>
          </button>

          {/* <div className='flex justify-center items-center w-full'>
            
          <button className='flex justify-center items-center grow py-[10px] bg-glass backdrop-blur-[30px] hover:bg-glassHover'>
            <AiFillLike />Like
          </button>
          <button className='flex justify-center items-center grow py-[10px] bg-glass backdrop-blur-[30px] hover:bg-glassHover'>
            <AiFillDislike />Dislike
          </button>

          </div> */}
          <PostLikeBtn meal={objectMeal}/>
        </div>
    </div>
  )
}

export default MealPost