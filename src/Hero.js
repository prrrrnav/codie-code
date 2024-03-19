import React from 'react'

const Hero = () => {
    return (
        <div className=' pl-10 pr-10 pb-10 text-white'>
            {/* <hr className=' mb-10'></hr> */}
            <div className=' text-4xl pt-20 text-center hover: origin-top transition-all  duration-1000 '>Here we are all about <br></br> <i className='text-8xl text-gray-500'>coding our way up</i> </div>
            <img src='https://images.unsplash.com/photo-1626624338641-b99e0d32c958?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='hero' className='  mt-20  w-full h-90 object-cover rounded-xl shadow-lg 
            border border-black
            hover:opacity-80 transition duration-300 ease-in-out  hover:border-white '  />
            {/* <div class="relative h-90">
                <img src="https://images.unsplash.com/photo-1589287707312-213624549c88?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Paparazzi" class=" w-full mt-20 h-auto rounded-xl object-contain "></img>
                    <div class="absolute inset-0 flex items-center
                    rounded-xl justify-center 
                    border border-black hover:bg-black 
                    hover:border-white
                    hover:bg-opacity-25 transition duration-300 ease-in-out">
                        <h1 class="text-white text-4xl">We click your moments!</h1>
                    </div>
            </div> */}

        </div>
    )
}

export default Hero
