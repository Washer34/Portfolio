import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail, AiOutlineProject } from 'react-icons/ai';
import { BsPerson, BsMoonStars, BsSun } from 'react-icons/bs'

const Sidenav = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
      {
        nav ? (
          <div className="nav-menu">
            <a onClick={handleNav}
              href="#main" className="nav-link">
              <AiOutlineHome size={20} />
              <span className="pl-4">Home</span>
            </a>
            <a onClick={handleNav}
              href="#aboutme" className="nav-link">
              <BsPerson size={20} />
              <span className="pl-4">About me</span>
            </a>
            <a onClick={handleNav}
              href="#projects" className="nav-link">
              <AiOutlineProject size={20} />
              <span className="pl-4">Projects</span>
            </a>
            <a onClick={handleNav}
              href="#contact" className="nav-link">
              <AiOutlineMail size={20} />
              <span className="pl-4">Contact</span>
            </a>
            <a onClick={handleNav}
              href="#contact" className="nav-link">
              <BsMoonStars size={20} />
              <span className="pl-4">Dark mode</span>
            </a>
          </div>
        )
          : (
            ''
          )
      }

      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
          <a href="#main" className='side-link'>
            <AiOutlineHome size={20} />
          </a>
          <a href="#aboutme" className='side-link'>
            <BsPerson size={20} />
          </a>
          <a href="#projects" className='side-link'>
            <AiOutlineProject size={20} />
          </a>
          <a href="#contact" className='side-link'>
            <AiOutlineMail size={20} />
          </a>
          <a href="#contact" className='side-link'>
            <BsMoonStars size={20} />
          </a>
        </div>
      </div>


    </div>
  )
}

export default Sidenav