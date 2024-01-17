import React from 'react'
import Table from '@/components/Table'
import AdminBarMonth from '../charts/Admin/AdminBarMonth'
import AdminLine from '../charts/Admin/AdminLine'
import Survey from '../survey'
const Admin = () => {
  
  return (
    <div className='h-screen'>
      <div className='h-1/6'>
        <Survey />
      </div>
      <div className='flex h-2/6  w-screen relative  flex-col md:flex-row justify-center md:gap-x-14 gap-y-5 items-center '>
        <section className='md:h-full h-1/2  flex flex-col justify-center   items-center w-[80%] md:w-2/6 bg-[#F2F5F9] rounded-lg'>
          <span className='text-gray-400 w-full text-left px-4'>Monthly Analysis</span>
          <AdminBarMonth/>
          </section>
          <section className='md:h-full h-1/2 flex flex-col justify-center  items-center w-[80%] md:w-2/6 bg-[#F2F5F9] rounded-lg'>
          <span className='text-gray-400 w-full text-left px-4'>Today Analysis</span>

          <AdminLine/>
          </section>
      </div>
      <div className='mt-20'>

      <Table />
      </div>
    </div>
  )
}

export default Admin
