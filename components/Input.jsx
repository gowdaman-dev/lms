'use client'
import React, { useState } from 'react'
import { FaLock, FaUser, FaUserGraduate } from 'react-icons/fa6'

function Input (props) {
  let [isVisible, setIsVisible] = useState('password')
  function passVisiblity () {}
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

      {props.name === 'select' && (
        <>
          <select
            required
            type={props.type}
            name={props.name}
            id=''
            placeholder={props.placeholder}
            className='w-full px-4 outline-none text-gray-400 bg-transparent font-light '
          >
            <option selected value='Student/Staff'> Student/staff</option>
            <option value='Student'> Student</option>
            <option value='Staff'>Staff</option>
          </select>
          {iconcomponent}
        </>
      )}
    </div>
  )
}

export default Input
