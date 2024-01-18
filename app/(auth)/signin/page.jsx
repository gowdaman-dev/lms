import Image from 'next/image'
import Link from 'next/link'
import { FaLock, FaUser } from 'react-icons/fa6'
import Input from '@/components/Input'
export default function Home () {
  return (
    <div className=' flex flex-row-reverse h-[100vh] w-screen bg-[var(--authbg)]'>
      <div className='flex sm:hidden w-full h-1/3 items-center justify-center bg-[var(--authgraydient)]'>
        <h1 className='text-center text-4xl text-blue-400 font-[calibari]'>
          EduLearn
        </h1>
      </div>
      <div className=' sm:relative absolute bottom-0 left-0 flex flex-col md:w-1/2 w-full sm:h-full h-2/3 py-4 sm:bg-transparent bg-white rounded-t-[40px] items-center justify-center'>
        <form action='' method='post' className='flex flex-col w-[300px]'>
          <div className='w-full flex flex-col sm:gap-8 gap-6'>
            <h1 className='text-center text-4xl text-blue-600 font-bold'>
              Sign In
            </h1>

            <Input
              name='userName'
              placeholder='Username'
              icon='user'
              type='text'
            />

            <Input
              type='password'
              placeholder='password'
              icon='lock'
              name='password'
            />
            <div className='flex gap-2'>
              <input
                className='accent-white'
                type='checkbox'
                name=''
                id='rememberme'
                required
              />
              <label className='text-[12px] text-gray-700 cursor-pointer' htmlFor='rememberme'>
                Remember me
              </label>
            </div>
            <button
              type='submit'
              className='bg-blue-500 px-10 rounded-lg text-white py-2 w-full'
            >
              SignIn
            </button>
            <div className='flex w-full  justify-between'>
              <p className='text-[10px] text-gray-400'>
                New user? Create account{' '}
                <Link className='text-blue-500' href={'/signup'}>
                  here
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
