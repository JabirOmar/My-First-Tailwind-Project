import React from 'react'
import { BsArrowRepeat } from 'react-icons/bs'
import { IoIosSearch } from 'react-icons/io'

function TaskBottomDivs() {
  return (
    <div className='flex justify-between p-4'>
      <div className='flex gap-2'>
        <div className='border border-gray-400 w-16 p-2 rounded'>
            <span>25</span>
        </div>
        <div className='border border-gray-400 flex items-center rounded'>
            <p className='pl-2 pr-2 border-r border-gray-400'>Export</p>
            <p className='pl-2 pr-2 border-r border-gray-400'>Bulk Actions</p>
            <BsArrowRepeat className='p-2 box-content' />
        </div>
      </div>
      <div className='flex items-center border border-gray-400 rounded'>
        <IoIosSearch className='border-r p-2 box-content border-gray-400' />
        <span className='p-2'>Search...</span>
      </div>
    </div>
  )
}

export default TaskBottomDivs
