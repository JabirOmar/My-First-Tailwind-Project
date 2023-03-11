import React from 'react'
import { CgMenuGridR } from 'react-icons/cg'
import { BiCheckCircle, BiTime } from 'react-icons/bi'
import { IoIosRocket } from 'react-icons/io'
import { VscFiles } from 'react-icons/vsc'
import { FaCommentDots } from 'react-icons/fa'
import { GrTextAlignLeft } from 'react-icons/gr'
import { AiFillFile, AiOutlineFile } from 'react-icons/ai'
import { HiOutlineScale } from 'react-icons/hi'
import { BsExclamationLg } from 'react-icons/bs'
import { AiFillCheckCircle } from 'react-icons/ai'

function NavBar() {

    setTimeout(() => {
        let navLink = document.querySelectorAll('.nav-li')

        navLink.forEach(link => {
            link.addEventListener('click', function(){
                navLink.forEach(li => li.classList.remove('active'))
                this.classList.add('active')
            })
        })



    }, 500);


    function overviewPage() {
      let sections = document.querySelectorAll('.section')
      let overviewSection = document.querySelector('.overview-page')
      sections.forEach(section => {
        section.classList.remove('active')
      })
      overviewSection.classList.add('active')
    }

    function taskPage(){
      let sections = document.querySelectorAll('.section')
      let taskSection = document.querySelector('.task-page')
      sections.forEach(section => {
        section.classList.remove('active')
      })
      taskSection.classList.add('active')
    }

    function blankPage(){
      let sections = document.querySelectorAll('.section')
      sections.forEach(section => {
        section.classList.remove('active')
      })
    }



  return (
    <nav className='navbar w-full p-4 bg-slate-50 overflow-hidden'>
      <ul className=' ul-list flex items-center justify-start gap-4 pt-2 pb-2 relative before:content-[""] before:w-full before:absolute before:h-[0.5px] before:bg-gray-400 before:top-0 after:content-[""] after:absolute after:w-full after:h-[0.5px] after:bg-gray-400 after:bottom-0 '>
        <li className='nav-li flex items-center gap-1 cursor-pointer hover:text-cyan-600 relative hover:after:w-full active' onClick={overviewPage}>  <CgMenuGridR /> Overview</li>
        <li className='nav-li flex items-center gap-1 cursor-pointer hover:text-cyan-600 relative hover:after:w-full ' onClick={taskPage}>  <BiCheckCircle />Task</li>
        <li className='nav-li flex items-center gap-1 cursor-pointer hover:text-cyan-600 relative hover:after:w-full ' onClick={blankPage}>  <BiTime />TimeSheets</li>
        <li className='nav-li flex items-center gap-1 cursor-pointer hover:text-cyan-600 relative hover:after:w-full ' onClick={blankPage}>  <IoIosRocket />Milestones</li>
        <li className='nav-li flex items-center gap-1 cursor-pointer hover:text-cyan-600 relative hover:after:w-full ' onClick={blankPage}>  <VscFiles />Files</li>
        <li className='nav-li flex items-center gap-1 cursor-pointer hover:text-cyan-600 relative hover:after:w-full ' onClick={blankPage}>  <FaCommentDots />Discussions</li>
        <li className='nav-li flex items-center gap-1 cursor-pointer hover:text-cyan-600 relative hover:after:w-full ' onClick={blankPage}>  <GrTextAlignLeft />Gantt</li>
        <li className='nav-li flex items-center gap-1 cursor-pointer hover:text-cyan-600 relative hover:after:w-full ' onClick={blankPage}>  <AiFillCheckCircle />Tickets</li>
        <li className='nav-li flex items-center gap-1 cursor-pointer hover:text-cyan-600 relative hover:after:w-full ' onClick={blankPage}>  <AiFillFile />Contracts</li>
        <li className='nav-li flex items-center gap-1 cursor-pointer hover:text-cyan-600 relative hover:after:w-full ' onClick={blankPage}>  <HiOutlineScale />Sales</li>
        <li className='nav-li flex items-center gap-1 cursor-pointer hover:text-cyan-600 relative hover:after:w-full ' onClick={blankPage}>  <AiOutlineFile />Notes</li>
        <li className='nav-li flex items-center gap-1 cursor-pointer hover:text-cyan-600 relative hover:after:w-full ' onClick={blankPage}>  <BsExclamationLg />Activity</li>
      </ul>
    </nav>
  )
}

export default NavBar
