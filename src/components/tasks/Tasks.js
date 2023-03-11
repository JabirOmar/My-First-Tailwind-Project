import React from 'react'
import TaskBottomDivs from './TaskBottomDivs'
import TaskButtons from './TaskButtons'
import TaskSummary from './TaskSummary'
import TaskTable from './TaskTable'

function Tasks() {
  return (
    <section className='task-page hidden section w-full h-[calc(100vh-150px)] flex-col overflow-x-hidden bg-white'>
      <TaskButtons />
      <TaskSummary />
      <TaskBottomDivs />
      <TaskTable />
    </section>
  )
}

export default Tasks
