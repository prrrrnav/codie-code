import React from 'react'


const Navbar = () => {
    return (
        <div className='flex flex-auto  text-cyan-50 pl-10 pr-10 p-5'>
            <div className='absolute top-4 left-10 text-2xl '>Codie-code</div>
            <span className='flex flex-auto justify-center gap-10'>

                <div className='relative inline-block'>
                    
                    
                </div>

                <div className='hover:text-neutral-500 hover: origin-top transition-all duration-500 '>Home</div>
                <div className='hover:text-neutral-500 hover: origin-top transition-all duration-500 '>Codebase</div>

            </span>
        </div>
    )
}

export default Navbar
