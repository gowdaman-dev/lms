'use client'
import Image from 'next/image'
import Link from 'next/link'
import Input from '@/components/Input'
import { FaUserGraduate } from 'react-icons/fa6'
import React, { useState } from 'react'
export default function Home() {

  //standard
  let [userrole, setUserrole] = useState('')
  const standard = [
    {
      std: '1st standard',
      value: 1
    },
    {
      std: '2nd standard',
      value: 2
    },
    {
      std: '3rd standard',
      value: 3
    },
    {
      std: '4th standard',
      value: 4
    },
    {
      std: '5th standard',
      value: 5
    },
    {
      std: '6th standard',
      value: 6
    },
    {
      std: '7th standard',
      value: 7
    },
    {
      std: '8th standard',
      value: 8
    },
    {
      std: '9th standard',
      value: 9
    },
    {
      std: '10th standard',
      value: 10
    },
    {
      std: '1th standard',
      value: 11
    },
    {
      std: '12th standard',
      value: 12
    },
  ]
  return (
    <div className=' flex h-screen w-screen bg-[var(--authbg)]'>
      <div className='flex sm:hidden w-full h-1/5 items-center justify-center bg-[var(--authgraydient)]'>
        <h1 className='text-center  text-4xl text-blue-400 font-[calibari]'>
          EduLearn
        </h1>
      </div>
      <div className='sm:relative absolute bottom-0 left-0 flex flex-col md:w-1/2 w-full sm:h-full h-4/5 py-4 sm:bg-transparent bg-white rounded-t-[40px] items-center justify-center'>
        <form
          action=''
          method='post'
          className='flex h-full flex-col w-[300px]'
        >
          <div className='w-full flex flex-col h-full justify-evenly  sm:gap-y-[5]'>
            <h1 className='text-center text-4xl text-blue-600 font-bold'>
              Sign UP
            </h1>
            {/* username component */}
            <Input
              type='text'
              placeholder='UserName'
              icon='user'
              name='username'
            />
            {/* Email component */}
            <Input type='email'
              placeholder='Email'
              icon='email'
              name='email' />
            {/* password component */}

            <Input
              type='password'
              placeholder='password'
              icon='lock'
              name='password'
            />
            {/* staff/student component */}
            <div className="flex bg-white w-full items-center justify-center shadow-[-1px_-1px_0px_10px_var(--white),1px_1px_0px_10px_var(--midgray)] rounded-lg">
              <select
                required
                onChange={(e) => { setUserrole(e.target.value) }}
                name='staff/student'
                id='userrole'
                className='w-full px-4 outline-none text-gray-400 bg-transparent font-light '
              >
                <option selected value='none'> Student/staff</option>
                <option value='student'> Student</option>
                <option value='Staff'>Staff</option>
              </select>
              <FaUserGraduate className='text-gray-700 bg-white' />
            </div>
            {/* if student */}
            {
              (userrole == 'student') && (
                <div className="flex bg-white w-full items-center justify-center shadow-[-1px_-1px_0px_10px_var(--white),1px_1px_0px_10px_var(--midgray)] rounded-lg">
                  <select
                    required
                    name='staff/student'
                    id='userrole'
                    className='w-full px-4 outline-none text-gray-400 bg-transparent font-light'
                  >
                    <option selected value='none'> Standard</option>
                    {
                      standard.map((std)=>{
                        return <option key={std.value} value={std.value}>{std.std}</option>
                      })
                    }
                  </select>
                  <FaUserGraduate className='text-gray-700 bg-white' />
                </div>
              )
            }

            <div className='flex gap-2'>
              <input
                className='accent-white'
                type='checkbox'
                name=''
                id='rememberme'
                required
              />
              <label
                className='text-[12px] text-gray-700 cursor-pointer'
                htmlFor='rememberme'
              >
                Remember me
              </label>
            </div>
            <button
              type='submit'
              className='bg-blue-500 px-10 rounded-lg text-white py-2 w-full'
            >
              SignUp
            </button>
            <div className='flex w-full justify-between'>
              <p className='text-[10px] text-gray-400'>
                Already Have a account ?{' '}
                <Link className='text-blue-500' href={'/signin'}>
                  SignIn
                </Link>
              </p>
              <Link
                className='text-[10px] text-gray-400'
                href={'/reset/password'}
              >
                Forgot password?
              </Link>
            </div>
          </div>
        </form>
      </div>
      <div className='h-screen w-1/2 md:grid hidden place-items-center'>
        <Image src={'/authimg/authbg.png'} height={400} width={400} />
      </div>
    </div>
  )
}
