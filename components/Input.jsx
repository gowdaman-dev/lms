'use client'
import React, { useState } from 'react'
import { FaLock, FaUser, FaUserGraduate, FaMail } from 'react-icons/fa6'
import { IoMdMail } from "react-icons/io";

function Input(props) {
  function passVisiblity() { }
  
  //icon selection from props
  let iconcomponent = null
  switch (props.icon) {
    case 'lock':
      iconcomponent = (
        <FaLock onClick={passVisiblity} className='text-gray-700 bg-white' />
      )
      break
    case 'user':
      iconcomponent = <FaUser className='text-gray-700 bg-white' />
      break
    case 'graduate':
      iconcomponent = <FaUserGraduate className='text-gray-700 bg-white' />
      break
    case 'email':
      iconcomponent = <IoMdMail className='text-gray-700 bg-white' />
      break


    default:
      iconcomponent = null
  }

  return (
    <div className='flex bg-white w-full items-center justify-center shadow-[-1px_-1px_0px_10px_var(--white),1px_1px_0px_10px_var(--midgray)] rounded-lg'>
      <>
        {props.name !== 'select' && (
          <>
            <input
              required
              type={props.type}
              name={props.name}
              id=''
              placeholder={props.placeholder}
              className='w-full px-4 outline-none text-gray-500 font-light '
            />
            {iconcomponent}
          </>
        )}
      </>
    </div>
  )
}

export default Input
