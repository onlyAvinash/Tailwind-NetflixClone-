import React, { useEffect, useState } from 'react'

const Navbar = () => {  //this is functional component

    const [isDark, setIsDark] = useState(false);

      // useEffect(() => {
      //   window.addEventListener("scroll", () => {
      //     if (window.scrollY > 100) {
      //       setIsDark(true);
      //     } else setIsDark(false);
      //   });

      //   return () => {
      //     window.removeEventListener("scroll");
      //   };
      // }, []);
  useEffect(()=>{
   const changeNav = () => {
        if(window.scrollY > 100)
        {  
           
            setIsDark(true);
        }
        else{
          setIsDark(false);
        }
      }

    window.addEventListener('scroll', changeNav)
      
    return () => {
    window.addEventListener('scroll', changeNav)
    }

    },[])


  return (
    <div className={ isDark?'bg-black  flex items-center justify-between p-4 z-[100]  w-full fixed top-0 transition ease-linear delay-150 ' : ' flex items-center justify-between p-4 z-[100]  w-full fixed top-0 transition ease-linear delay-200'}  >
          
          <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
          <div>
              <button className='text-white pr-4'> SIGN IN</button>
              <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'> SIGN UP</button>
          </div>
    </div>
  )
}

export default Navbar