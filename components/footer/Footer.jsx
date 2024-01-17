import React from 'react'

function Footer({ theme }) {
    return (
        <>
            {
                (theme == 'dark') && (
                    <div className='w-full py-1 flex text-gray-200 justify-between px-8 bg-gray-600'>
                        <p className='text-[10px]'>
                            © EduLearn, All Right Reserved.
                        </p>
                        <p className='text-[10px]'>
                            Designed and Developed By ULN
                        </p>
                    </div>
                )
            }
            {
                (theme == 'light') && (
                    <div className='w-full py-1 flex text-gray-400 justify-between px-8 bg-sky-100'>
                        <p className='text-[10px]'>
                            © EduLearn, All Right Reserved.
                        </p>
                        <p className='text-[10px]'>
                            Designed and Developed By ULN
                        </p>
                    </div>
                )
            }
        </>
    )
}

export default Footer