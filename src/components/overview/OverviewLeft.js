import React from 'react'
import { AiTwotoneSetting } from 'react-icons/ai'
import { FaRegUserCircle } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'

function OverviewLeft() {
  return (
    <div className='left-overview vs:w-full lg:w-1/2 p-4 border-r border-gray-400 lg:overflow-scroll'>

      <div className='flex h-[50px] font-semibold'>
        <h2>Overview</h2>
      </div>
      
      <div className='overview-list flex vs:flex-col sm:flex-col md:flex-row h-fit min-h-[450px]'>
        <div className='01-left vs:w-full md:w-1/2 '>
            <ul className='flex flex-col gap-5 text-sm'>
                <li className=' border-b border-blue-200 pb-2'>
                    <div className='flex justify-between '>
                        <p className=' font-medium w-1/2'>Project #</p>
                        <p className=' w-1/2'>2</p>
                    </div>
                </li>

                <li className=' border-b border-blue-200 pb-2'>
                    <div className='flex justify-between'>
                        <p className=' font-medium w-1/2'>Customer</p>
                        <p className=' w-1/2 text-cyan-600'>Holi Company</p>
                    </div>
                </li>

                <li className=' border-b border-blue-200 pb-2'>
                    <div className='flex justify-between'>
                        <p className=' font-medium w-1/2'>Billing Type</p>
                        <p className=' w-1/2'>Fixed Rate</p>
                    </div>
                </li>

                <li className=' border-b border-blue-200 pb-2'>
                    <div className='flex justify-between'>
                        <p className=' font-medium w-1/2'>Total Rate</p>
                        <p className=' w-1/2'>ETB1,200,000.00</p>
                    </div>
                </li>

                <li className=' border-b border-blue-200 pb-2'>
                    <div className='flex justify-between'>
                        <p className=' font-medium w-1/2'>Status</p>
                        <p className=' w-1/2'>In Progress</p>
                    </div>
                </li>

                <li className=' border-b border-blue-200 pb-2'>
                    <div className='flex justify-between'>
                        <p className=' font-medium w-1/2'>Date Created</p>
                        <p className=' w-1/2'>2023/2/14</p>
                    </div>
                </li>

                <li className=' border-b border-blue-200 pb-2'>
                    <div className='flex justify-between'>
                        <p className=' font-medium w-1/2'>Start Date</p>
                        <p className=' w-1/2'>2023/2/14</p>
                    </div>
                </li>

                <li className=' border-b border-blue-200 pb-2'>
                    <div className='flex justify-between'>
                        <p className=' font-medium w-1/2'>Deadline</p>
                        <p className=' w-1/2'>2023/2/14</p>
                    </div>
                </li>

                <li className=' border-b border-blue-200 pb-2'>
                    <div className='flex justify-between'>
                        <p className=' font-medium w-1/2'>Total Logged Hours</p>
                        <p className=' w-1/2'>00:00</p>
                    </div>
                </li>

            </ul>
        </div>
        <div className='02-left vs:w-full vs:mt-10 vs:mb-14 md:w-1/2 md:m-0 flex flex-col items-center'>
               <p>Project Progress</p>
                <div className='progress-container '>
                    <div className='circle-progress mt-5 h-[160px] w-[160px] relative rounded-full flex items-center justify-center shadow-shadow-two after:content-[""] after:absolute after:w-[83%] after:h-[83%] after:bg-white after:rounded-full after:shadow-shadow-one ' style={{background: 'conic-gradient(#80c617 ' + 28 * 3.6 + 'deg, #f5f5f5 0deg)'}}>
                        <div className='progress-value relative z-10 text-3xl'>28%</div>
                    </div>
                </div>
        </div>
      </div>

      <div className=' h-fit min-h-[100px] description-section border-t flex justify-between flex-col pt-4 pb-4 border-b border-gray-400'>
        <h3>Description</h3>
        <p className=' text-gray-400 text-sm'>No description for this project</p>
      </div>

        <div className='members-section '>
            <div className=' member-title flex items-center justify-between pb-7 pt-4'>
              <h3>Members</h3>
              <AiTwotoneSetting className=' text-cyan-600 cursor-pointer' />
            </div>

            <div className='member-card-container flex flex-col gap-3'>

              <div className='member-card flex items-center justify-between'>
                <div className='member-card-01 flex items-center gap-3'>
                    <FaRegUserCircle />
                    <div>
                        <p className=' text-sm text-cyan-600 font-bold'>Faysal Ali</p>
                        <p className=' text-sm text-gray-400'>Total Logged Time 00:00</p>
                    </div>
                </div>
                <div className='member-card-02'>
                    <ImCross className=' text-red-600 text-xs cursor-pointer' />
                </div>
              </div>

              <div className='member-card flex items-center justify-between'>
                <div className='member-card-01 flex items-center gap-3'>
                    <FaRegUserCircle />
                    <div>
                        <p className=' text-sm text-cyan-600 font-bold'>Faysal Ali</p>
                        <p className=' text-sm text-gray-400'>Total Logged Time 00:00</p>
                    </div>
                </div>
                <div className='member-card-02'>
                    <ImCross className=' text-red-600 text-xs cursor-pointer' />
                </div>
              </div>
              
            </div>
        </div>

    </div>
  )
}

export default OverviewLeft
