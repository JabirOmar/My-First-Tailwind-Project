import React from 'react'
import { MdCheckBoxOutlineBlank } from 'react-icons/md'

function TaskTable() {
  return (
    <div className=' mr-4 ml-4 mb-16'>
    <form className=' overflow-x-auto'>
      <ul className='flex list-none items-center bg-slate-300 rounded'>
        <li className='w-10 min-w-10 h-[40px] flex items-center justify-center bg-slate-400'>
            <MdCheckBoxOutlineBlank />
        </li>
        <li className='w-10 min-w-10 h-[40px] flex items-center justify-center bg-slate-300'>
            #
        </li>

        <li className='w-40 min-w-40 h-[40px] flex items-center pl-2 bg-slate-400'>
            <span>Name</span>
        </li>

        <li className='w-28 min-w-28 h-[40px] flex items-center pl-2 bg-slate-300'>
            <span>Status</span>
        </li>

        <li className='w-28 min-w-28 h-[40px] flex items-center pl-2 bg-slate-400'>
            <span>Start Date</span>
        </li>

        <li className='w-28 min-w-28 h-[40px] flex items-center pl-2 bg-slate-300'>
            <span>Due Date</span>
        </li>

        <li className='w-40 min-w-40 h-[40px] flex items-center pl-2 bg-slate-400'>
            <span>Assigned to</span>
        </li>

        <li className='w-28 min-w-28 h-[40px] flex items-center pl-2 bg-slate-300'>
            <span>Tags</span>
        </li>

        <li className='w-28 min-w-28 h-[40px] flex items-center pl-2 bg-slate-400'>
            <span>Priority</span>
        </li>
      </ul>
      


      <div className='mt-1 rounded flex flex-col gap-1'>

        <ul className='flex list-none items-center  bg-slate-100 rounded'>
          <li className='w-10 min-w-10 h-[40px] flex items-center justify-center bg-slate-300'>
              <MdCheckBoxOutlineBlank />
          </li>
          <li className='w-10 min-w-10 h-[40px] flex items-center justify-center bg-slate-100'>
              2
          </li>
  
          <li className='w-40 min-w-40 h-[40px] flex items-center pl-2 bg-slate-200'>
              <span>Road Constraction</span>
          </li>
  
          <li className='w-28 min-w-28 h-[40px] flex items-center pl-2 bg-slate-100'>
              <span>In Progress</span>
          </li>
  
          <li className='w-28 min-w-28 h-[40px] flex items-center pl-2 bg-slate-200'>
              <span>02/10/2022</span>
          </li>
  
          <li className='w-28 min-w-28 h-[40px] flex items-center pl-2 bg-slate-100'>
              <span>03/10/2023</span>
          </li>
  
          <li className='w-40 min-w-40 h-[40px] flex items-center pl-2 bg-slate-200'>
              <span>Haylan Group</span>
          </li>
  
          <li className='w-28 min-w-28 h-[40px] flex items-center pl-2 bg-slate-100'>
              <span>Tags</span>
          </li>
  
          <li className='w-28 min-w-28 h-[40px] flex items-center pl-2 bg-slate-200'>
              <span>Priority</span>
          </li>
        </ul>
  
      </div>
    </form>
    </div>
  
  )
}

export default TaskTable
