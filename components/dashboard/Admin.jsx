import React from 'react'
import Table from '@/components/Table'
import AdminBarMonth from '../charts/Admin/AdminBarMonth'
const Admin = () => {
  
  return (
    <div className='h-screen'>
      <div className='h-1/6'>Header</div>
      <div className='flex h-2/6 w-screen flex-col sm:flex-row justify-center gap-x-14 gap-y-5 items-center '>
        <section className='h-full flex flex-col justify-center items-center w-[80%] sm:w-2/6 bg-[#F2F5F9] rounded-lg'>
          
          <AdminBarMonth/>
          </section>
          <section className='h-full flex flex-col justify-center items-center w-[80%] sm:w-2/6 bg-[#F2F5F9] rounded-lg'>
          
          <AdminBarMonth/>
          </section>
      </div>
      <div className='mt-20  h-2/6'>

      <Table />
      </div>
    </div>
  )
}

export default Admin
