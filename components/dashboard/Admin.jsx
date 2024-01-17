import React from 'react'
import Table from '@/components/Table'
import AdminLine from '../charts/Admin/AdminLine'
import Survey from '../survey'
import AdminBar from '../charts/Admin/AdminBarMonth'
const Admin = () => {

  return (
    <>
      <Survey/>
      <div className='flex h-fit w-full flex gap-4 md:justify-between justify-center md:flex-row flex-col '>
        <section className='h-[300px] md:w-1/2 w-full flex flex-col justify-center  items-center bg-[#F2F5F9] rounded-lg'>
          <span className='text-gray-400 w-full text-left px-4'>Monthly Analysis</span>
          <AdminBar />
        </section>
        <section className='h-[300px] md:w-1/2 w-full flex flex-col justify-center  items-center bg-[#F2F5F9] rounded-lg'>
          <span className='text-gray-400 w-full text-left px-4'>Today Analysis</span>
          <AdminLine />
        </section>
      </div>
      <div className='py-2 h-2/6 w-full'>
        <Table />
      </div>
    </>
  )
}

export default Admin
