"use client";

import Image from "next/image";
import coverImg1 from "@/public/images/burger-cover.jpg"
import coverImg2 from "@/public/images/noodles-cover.jpg"
import coverImg3 from "@/public/images/pasta-cover.jpg"
import coverImg4 from "@/public/images/pizza-1-cover.png"
import coverImg5 from "@/public/images/pizza-cover.jpeg"
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";


function CoverImageAnimation() {
  const allImages = [
      {image: coverImg1, alt: "burger Image", bg:"burger-cover.jpg"},
      {image: coverImg2, alt: "noodles Image", bg:"noodles-cover.jpg"},
      {image: coverImg3, alt: "pasta Image", bg:"pasta-cover.jpg"},
      {image: coverImg4, alt: "pizza Image", bg:"pizza-1-cover.png"},
      {image: coverImg5, alt: "pizza Image", bg:"pizza-cover.jpeg"},
  ]
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className="max-w-[1500px] relative mx-auto bg-[url('/images/burger-cover.jpg')]">
      <div className="image-slider relative z-20">
        <div ref={imageRef} className="image-container relative max-w-[851px] sm:h-[350px] h-[250px] mx-auto">
          <AnimatePresence mode="sync">
            <motion.div
              key={allImages[currentIndex].alt}
              initial={{opacity: 0 }}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{ duration: 1 }}
            >
              <Image
                src={allImages[currentIndex].image}
                alt={allImages[currentIndex].alt}
                fill
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-20 z-30"></div>
      <div className="absolute inset-0 bg-black opacity-80 "></div>
    </div>
  )
}

export default CoverImageAnimation


// const [currentCover, setCurrentCover] = useState(0);

//   useEffect(() =>{
//     const timer = setInterval(() =>{
//       setCurrentCover((prev) => (prev + 1) % allImages.length);
//     }, 6000)

//     return () => clearInterval(timer);
//   }, [])

//   const allImages = [
//       {image: coverImg1, alt: "burger Image", bg:"burger-cover.jpg"},
//       {image: coverImg2, alt: "noodles Image", bg:"noodles-cover.jpg"},
//       {image: coverImg3, alt: "pasta Image", bg:"pasta-cover.jpg"},
//       {image: coverImg4, alt: "pizza Image", bg:"pizza-1-cover.png"},
//       {image: coverImg5, alt: "pizza Image", bg:"pizza-cover.jpeg"},
//   ]


{/* <div 
className={`max-w-[1500px] relative mx-auto bg-cover bg-center`} 
style={{ backgroundImage: `url(/images/burger-cover.jpg)` }}
> 
  <AnimatePresence>
    <div 
        className="max-w-[851px] sm:h-[300px] h-[200px] z-20 relative mx-auto"
    >
    <motion.div
    
      initial={{scale:1.1, translateX:1, rotate:1}}
      animate={{scale:1, translateX: 0, rotate: 0}}
      transition={{duration: 2}}
      key={currentCover}
    >
      <Image className="mx-auto" src={allImages[currentCover].image} alt={allImages[currentCover].alt} fill/>
    </motion.div>
    </div>
  </AnimatePresence>
  <div className="absolute inset-0 bg-black opacity-20 z-30"></div>
  <div className="absolute inset-0 bg-black opacity-80 "></div>
</div> */}