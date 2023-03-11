import React from 'react'
import ContactDivs from './ContractDivs'
import ContactsTopButton from './ContractsTopButton'
import ContractTable from './ContractTable'


function Contracts() {
  return (
    <div className=' w-full bg-white h-screen hidden'>
      <ContactsTopButton />
      <ContactDivs />
      <ContractTable />
    </div>
  )
}

export default Contracts
