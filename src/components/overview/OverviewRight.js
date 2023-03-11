import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { BsFillCalendar2CheckFill } from 'react-icons/bs'

function OverviewRight() {
  return (
    <div className=' vs:w-full lg:w-1/2 p-4 bg-white'>


      <div className='flex vs:flex-col md:flex-row gap-4 gap-y-4 mb-5'>
        <div className=' vs:w-full md:w-1/2 flex flex-col pl-5 pr-5 rounded-md  justify-evenly h-[100px] shadow-shadow-three '>
            <div className='flex items-center justify-between'>
                0/0 Open Tasks
                <AiFillCheckCircle className=' text-2xl text-gray-400' />
            </div>
            <div>
                <span>0%</span>
            </div>
            <div className=' w-full h-[5px] border-2 rounded-md'></div>
        </div>
        <div className=' vs:w-full md:w-1/2 flex flex-col pl-5 pr-5 rounded-md justify-evenly h-[100px] shadow-shadow-three '>
            <div className='flex items-center justify-between'>
                0/1 Days Left
                <BsFillCalendar2CheckFill className=' text-2xl text-gray-400' />
            </div>
            <div>
                <span>0%</span>
            </div>
            <div className=' w-full h-[5px] border-2 rounded-md'></div>
        </div>
      </div>

      <div className='flex justify-between flex-wrap pl-4 pr-4 border-t border-b border-gray-300 pt-2 pb-4 gap-y-2'>
        <div className='flex flex-col justify-center gap-1 vs:w-full md:w-[24%] h-[100px] rounded-md pl-3 shadow-shadow-one'>
            <p className=' text-gray-500'>Total Expenses</p>
            <p>ETB0.00</p>
        </div>
        <div className='flex flex-col justify-center gap-1 vs:w-full md:w-[24%] h-[100px] rounded-md pl-3 shadow-shadow-one'>
            <p className=' text-cyan-600'>Billable Expenses</p>
            <p>ETB0.00</p>
        </div>
        <div className='flex flex-col justify-center gap-1 vs:w-full md:w-[24%] h-[100px] rounded-md pl-3 shadow-shadow-one'>
            <p className='text-green-600'>Billed Expenses</p>
            <p>ETB0.00</p>
        </div>
        <div className='flex flex-col justify-center gap-1 vs:w-full md:w-[24%] h-[100px] rounded-md pl-3 shadow-shadow-one'>
            <p className=' text-red-500'>Unbilled Expenses</p>
            <p>ETB0.00</p>
        </div>
      </div>


      <div className=''>3</div>


      <div className=''>4</div>


    </div>
  )
}

export default OverviewRight
