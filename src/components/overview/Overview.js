import React from 'react'
import OverviewLeft from './OverviewLeft'
import OverviewRight from './OverviewRight'


function Overview() {
  return (
    <section className='overview-page section active hidden vs:flex-col vs:overflow-scroll lg:flex-row lg:overflow-hidden w-full h-[calc(100vh-150px)] bg-white'>
      <OverviewLeft />
      <OverviewRight />
    </section>
  )
}

export default Overview
