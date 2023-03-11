import React from 'react'
import { IoFunnelSharp} from 'react-icons/io5'

function TaskButtons() {
  return (
    <div className=' h-10 flex items-center justify-end gap-2 mt-6 mr-4 mb-6 text-sm'>
      <button className=' w-[155px] h-[35px] bg-slate-200 rounded cursor-pointer'>VIEW KAN BAN</button>
      <button className=' w-[155px] h-[35px] rounded bg-lime-500 text-white cursor-pointer'>TASK OVERVIEW</button>
      <IoFunnelSharp className=' p-[10px] box-content bg-slate-200 rounded cursor-pointer' />
    </div>
  )
}

export default TaskButtons
