'use client'
import Image from 'next/image'
import Link from 'next/link'
import Input from '@/components/Input'
import { FaUserGraduate, FaX } from 'react-icons/fa6'
import React, { useEffect, useState } from 'react'
import Select, { StylesConfig } from 'react-select'
export default function Home() {
  const StylesConfig = {
    color: "white",
    borderColor: "pink"
  }
  //standard
  let [userrole, setUserrole] = useState('')
  let [staffclasses, setStaffclasses] = useState([])
  const standard = [
    {
      label: '1st standard',
      value: 1
    },
    {
      label: '2nd standard',
      value: 2
    },
    {
      label: '3rd standard',
      value: 3
    },
    {
      label: '4th standard',
      value: 4
    },
    {
      label: '5th standard',
      value: 5
    },
    {
      label: '6th standard',
      value: 6
    },
    {
      label: '7th standard',
      value: 7
    },
    {
      label: '8th standard',
      value: 8
    },
    {
      label: '9th standard',
      value: 9
    },
    {
      label: '10th standard',
      value: 10
    },
    {
      label: '11th standard',
      value: 11
    },
    {
      label: '12th standard',
      value: 12
    },
  ]
  const addStandard = (selectedOption) => {
    setStaffclasses(selectedOption);
    console.log(staffclasses);
  }
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
                defaultValue={''}
                className='w-full px-4 outline-none text-gray-400 bg-transparent font-light '
              >
                <option value=''> Student/staff</option>
                <option value='student'> Student</option>
                <option value='staff'>Staff</option>
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
                    defaultValue={''}
                    id='userrole'
                    className='w-full px-4 outline-none text-gray-400 bg-transparent font-light'
                  >
                    <option value='none'>Standard</option>
                    {
                      standard.map((std) => {
                        return <option key={std.value} value={std.value}>{std.label}</option>
                      })
                    }
                  </select>
                  <FaUserGraduate className='text-gray-700 bg-white' />
                </div>
              )
            }
            {/* if staff */}
            {
              (userrole == 'staff') && (
                <div className="flex flex-col">
                  <div className=" py-0 flex bg-white w-full items-center justify-center shadow-[-1px_-1px_0px_10px_var(--white),1px_1px_0px_10px_var(--midgray)] rounded-lg">
                    <Select
                      options={standard}
                      value={staffclasses}
                      onChange={addStandard}
                      isMulti={true}
                      placeholder={'Standard'}
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          border: 'none',
                          boxShadow: "none",
                          outline: 'none',
                          ":focus": {
                            border: 'none',
                            outline: 'none',
                          },
                          ":hover": {
                            border: 'none',
                          }
                        }),
                        container:
                          (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: 'white',
                            outline: 'none',
                            ":focus": {
                              border: 'none',
                              outline: 'none',
                            },
                            ":hover": {
                              border: 'none',
                            }
                          }),
                        input:
                          (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: 'white',
                            outline: 'none',
                            ":focus": {
                              border: 'none',
                              outline: 'none',
                            },
                            ":hover": {
                              border: 'none',
                            }
                          }),
                        menu: (baseStyles, state) => ({
                          ...baseStyles,
                          borderColor: 'white',
                          outline: 'none',
                          ":focus": {
                            border: 'none',
                            outline: 'none',
                          },
                          ":hover": {
                            border: 'none',
                          }
                        }),
                        valueContainer: (baseStyles, state) => ({
                          ...baseStyles,
                          fontSize:'10px',
                          display:'flex'
                        }),
                        placeholder:(baseStyles, state) => ({
                          ...baseStyles,
                          fontSize:'14px',
                          display:'flex',
                          fontWeight:'300'
                        }),
                      }}
                      className="w-full"
                    />
                    <FaUserGraduate className='text-gray-700 bg-white' />
                  </div>
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
