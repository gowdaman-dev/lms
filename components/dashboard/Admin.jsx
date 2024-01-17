import React from 'react'
import Table from '@/components/Table'
const Admin = () => {
  const std = 'VII'
  return (
    <div className='h-screen'>
      <div className='h-1/6'>Header</div>
      <div className='flex h-2/6 w-screen justify-center gap-14 '>
        <section className='h-full w-1/3 bg-[#F2F5F9]'></section>{' '}
        <section className='h-full w-1/3 bg-[#F2F5F9]'></section>
      </div>
      <Table />
    </div>
  )
}

export default Admin
