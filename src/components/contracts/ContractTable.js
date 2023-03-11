import React from 'react'

function ContractTable() {
  return (
    <div className=' mr-4 ml-4 mb-16'>
    <form className=' overflow-x-auto'>

      <ul className='flex list-none items-center bg-slate-100 rounded'>
      
        <li className='w-10 min-w-10 h-[40px] flex items-center justify-center bg-slate-100 border-r border-gray-300'>
            #
        </li>

        <li className='min-w-40 h-[40px] flex items-center pl-2 bg-slate-100 border-r border-gray-300'>
            <span>Subject</span>
        </li>

        <li className='min-w-40 h-[40px] flex items-center pl-2 bg-slate-100 border-r border-gray-300'>
            <span>Customer</span>
        </li>

        <li className='min-w-40 h-[40px] flex items-center pl-2 bg-slate-100 border-r border-gray-300'>
            <span>Contract Type</span>
        </li>

        <li className='min-w-40 h-[40px] flex items-center pl-2 bg-slate-100 border-r border-gray-300'>
            <span>Contract Value</span>
        </li>

        <li className='min-w-40 h-[40px] flex items-center pl-2 bg-slate-100 border-r border-gray-300'>
            <span>Start Date</span>
        </li>

        <li className='min-w-40 h-[40px] flex items-center pl-2 bg-slate-100 border-r border-gray-300'>
            <span>End Date</span>
        </li>

        <li className='min-w-40 h-[40px] flex items-center pl-2 bg-slate-100 border-r border-gray-300'>
            <span>Signature</span>
        </li>
      </ul>

      <div>
        <ul className='flex list-none ju items-center bg-slate-100 rounded'>
        
        <li className='w-10 min-w-10 h-[40px] flex items-center justify-center bg-red-100 border-r border-gray-300'>
            <span className=' text-sm'>2</span>
        </li>

        <li className='min-w-40 h-[40px] flex items-center pl-2 bg-red-100 border-r border-gray-300'>
            <span className=' text-blue-500 text-sm'>Hrm System Contract</span>
        </li>

        <li className='min-w-40 h-[40px] flex items-center pl-2 bg-red-100 border-r border-gray-300'>
            <span className=' text-blue-500 text-sm'>Holi Company</span>
        </li>

        <li className='min-w-40 h-[40px] flex items-center pl-2 bg-red-100 border-r border-gray-300'>
            <span className=' text-red-700 text-sm'>Fixed Term</span>
        </li>

        <li className='min-w-40 h-[40px] flex items-center pl-2 bg-red-100 border-r border-gray-300'>
            <span className=' text-red-700 text-sm'>ETB1,200,000.00</span>
        </li>

        <li className='min-w-40 h-[40px] flex items-center pl-2 bg-red-100 border-r border-gray-300'>
            <span className=' text-red-700 text-sm'>02/10/2022</span>
        </li>

        <li className='min-w-40 h-[40px] flex items-center pl-2 bg-red-100 border-r border-gray-300'>
            <span className=' text-red-700 text-sm'>03/10/2023</span>
        </li>

        <li className='min-w-40 h-[40px] flex items-center pl-2 bg-red-100 border-r border-gray-300'>
            <span className=' text-gray-500 text-sm'>Not Signed</span>
        </li>
        </ul>
      </div>

    </form>
    </div>
  )
}

export default ContractTable
