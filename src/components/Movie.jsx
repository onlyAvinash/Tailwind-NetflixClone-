import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

const Movie = ({ item }) => {
    
  const [like, setLike] = useState(false);
   const shortOverview = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '....';
            
        } else {
            return str;
        }
    };

  return (
      <div className="snap-start w-[160px] sm:w-[200px] md:240px lg:[280px] inline-block cursor-pointer relative p-2 hover:scale-105 transition-all delay-100 " >
          
          <img className=" w-full h-auto block  " src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title}  />
          
                <div className="transition ease-in-out delay-100  absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                        <p className=' white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center '>
                             {shortOverview(item?.title, 19 )}
                        </p>
                         <p>
                           {like ? <FaHeart className='absolute top-4 left-4 text-gray-300'></FaHeart> : <FaRegHeart className='absolute top-4 left-4 text-gray-300'></FaRegHeart>}
                        </p>
                </div>
          
      </div>
      
  )
}

export default Movie