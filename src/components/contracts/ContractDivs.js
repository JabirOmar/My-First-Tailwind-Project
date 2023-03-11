import React from 'react'
import { BsArrowRepeat } from 'react-icons/bs'
import { IoIosSearch } from 'react-icons/io'

function ContactDivs() {
  return (
    <div className='flex items-center justify-between max-h-[30px] min-h-[30px] mr-4 ml-4 mt-4 mb-4 overflow-hidden'>
      <div className='flex gap-1 items-center'>
        <div className='border border-gray-400 w-[30px] rounded text-center h-[30px]'>
            <span className=' text-xs'>25</span>
        </div>
        <div className='border border-gray-400 flex items-center rounded h-[30px]'>
            <p className=' border-r border-gray-400 text-xs pr-1 pl-1'>Export</p>
            <p className=' border-r border-gray-400 text-xs pr-1 pl-1'>Bulk Actions</p>
            <BsArrowRepeat className=' box-content pr-1 pl-1' />
        </div>
      </div>
      <div className='flex items-center border border-gray-400 rounded h-[30px]'>
        <IoIosSearch className='border-r border-gray-400 box-content pr-1 pl-1' />
        <span className=' text-xs pr-1 pl-1'>Search...</span>
      </div>
    </div>
  )
}

export default ContactDivs
