import React, { useState } from 'react'
import { Link } from 'react-router-dom'




const Navbar = () => {

    const [menu, setMenu] = useState(false)
    function handleMenu() {
        console.log('Menu clicked')
        setMenu(!menu)
    }

    return (
        <div>
            <div className=' flex justify-between items-center text-white pl-10 pr-10 p-5 py-10  sm:flex flex-auto sm:pl-10 sm:pr-10 sm:p-5 ' >
                <div className=' top-7 left-10 text-2xl cursor-pointer'>Codie-code</div>
                <div>
                    <span class="material-symbols-outlined cursor-pointer md:hidden" onClick={handleMenu}>
                        menu
                    </span>
                </div>
            </div>


            <div className={`${menu ? " flex flex-auto  top-15 justify-center gap-10 py-3 bg-black w-full left-0 h-15 text-white md:absolute  " : "   hidden  flex-auto absolute top-20 justify-center gap-10  w-full left-0 h-10 text-white md:absolute md:top-7 md:flex "} `}>
                <div className='text-xl hover:text-neutral-500 hover:origin-top transition-all duration-500 cursor-pointer md:text-base'>
                    <Link to={'/codie-code/'}>Home</Link>
                    </div>
                <div className='text-xl hover:text-neutral-500 hover:origin-top transition-all duration-500 cursor-pointer md:text-base'>
                <Link to={'/codie-code/Codebase'}>Codebase</Link>
                    
                    </div>
            </div>

        </div>
    )
}

export default Navbar
