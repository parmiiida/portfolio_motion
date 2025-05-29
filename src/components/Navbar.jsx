import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logoo, menu, close } from "../assets";

const Navbar = () => {
  const[active ,setActive] = useState('')
  const[toggle ,setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex backdrop-blur-sm items-center py-5 fixed top-0 z-20 bg-black/10`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to=''
        className="flex items-center gap-2"
        onClick={() =>{
          //where are we currently
          setActive('')
          //scroll to the top of the page
          window.scrollTo(0 ,0)
        }}>
          <img src={logoo} alt="logo" className="w-9 h-9 object-contain"/>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Parmida &nbsp;<span className="sm:block hidden">| shoeibzade</span></p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li className={`${
              active === link.title
              ?'text-white'
              :'text-secondary'
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => (
              setActive(link.title)
            )}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="cursor-pointer flex flex-row ">
        <a
        href="/myCv.pdf"
        download
        className=" inline-flex items-center gap-2 cursor-pointer rounded-xl  px-5 py-2 font-medium text-[16px] border border-transparent hover:bg-blur-sm  text-[#915eff] border-[#915eff] transition-all duration-300 shadow-md">
          <span>Resume</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5 7.5 7.5-7.5M12 3v16.5" />
          </svg>
        </a>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}/>

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px]
          z-10 rounded-xl`}>
            <ul className="list-none flex sm:flex flex-col gap-4">
              {navLinks.map((link) => (
                <li className={`${
                  active === link.title
                  ?'text-white'
                  :'text-secondary'
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle)
                  setActive(link.title)
                }}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar