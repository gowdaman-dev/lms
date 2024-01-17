import Footer from '@/components/footer/Footer'
import Link from 'next/link'
import React, { Children } from 'react'

function page() {
  return (
    <>
      <div className="h-fit min-w-screen">
        <div className="py-2 px-10 bg-[#F2F5F9] flex justify-between items-center">
          <h1 className='text-xl text-sky-600'>Edulearn</h1>
          <div className=" flex gap-4 items-center justify-center">
            <Link className='px-2 py-1 border rounded-[40px] transition-color easeinout duration-500 hover:bg-sky-300 hover:text-white font-light border-sky-400 text-gray-600' href={'/signup'}>Signup</Link>
            <Link className='px-2 py-1 border rounded-[40px] transition-color easeinout duration-500 hover:bg-sky-300 hover:text-white font-light border-sky-400  bg-sky-400 text-white' href={'/signin'}>SignIn</Link>
          </div>
        </div>
        <div className="homebg w-screen h-full">
          <div className="h-full py-10 w-full bg-sky-100/[.9] grid place-items-center">
            <div className="flex flex-col gap-2 item-center justify-center">
              <p className='text-center text-xl text-red-500'>📚 Explore, Engage, Excel! 🚀</p>
              <h1 className='md:text-6xl text-5xl font-black text-sky-400 tracking-widest text-center'>Welcome to Edulearn</h1>
              <p className='md:w-[700px] w-full px-10 text-center text-gray-600 text-sm font-light'>At EduLearn, we believe in transforming education through technology. Our Learning Management System (LMS) is designed to empower schools, educators, and students by providing a seamless and interactive learning experience.</p>
              <div className="flex gap-4 items-center justify-center my-1">
                <Link className='text-white bg-sky-300 px-4 py-2 rounded-lg' href={'/signup'}>Let's start</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-fit w-screen p-8">
        <div className="w-full h-fit flex md:justify-between justify-center">
          <h1 className='text-2xl text-sky-400 md:w-1/2 w-full md:text-left text-center'>🌐 Welcome to EduLearn <br /> Where Learning Knows No Boundaries!</h1>
          <p className='w-1/3 text-sm font-light text-gray-800 min-flex hidden'>At EduLearn, we're committed to breaking down the walls of traditional education. Our LMS is a virtual gateway to a world of knowledge, fostering a dynamic learning environment for both educators and students.</p>
        </div>
        <div className="w-full h-fit flex flex-wrap py-8 justify-center gap-5">
          <div className="max-w-[300px] h-fit">
            <h1 className='text-xl font-light text-sky-400'>User-Friendly Interface</h1>
            <p className='text-gray-800 text-sm font-light'>EduLearn boasts an intuitive and user-friendly interface, ensuring a smooth and hassle-free experience for educators, students, and parents alike.</p>
          </div>
          <div className="max-w-[300px]">
            <h1 className='text-xl font-light text-sky-400'>Customizable Learning Paths</h1>
            <p className='text-gray-800 text-sm font-light'>Tailor your learning experience with customizable courses and curriculum. EduLearn allows educators to create personalized learning paths to meet the unique needs of each student.</p>
          </div>
          <div className="max-w-[300px]">
            <h1 className='text-xl font-light text-sky-400'>Interactive Multimedia Content</h1>
            <p className='text-gray-800 text-sm font-light'>Say goodbye to dull textbooks! EduLearn incorporates multimedia elements such as videos, interactive quizzes, and simulations to make learning engaging and effective.</p>
          </div>
          <div className="max-w-[300px]">
            <h1 className='text-xl font-light text-sky-400'>Real-time Progress Tracking</h1>
            <p className='text-gray-800 text-sm font-light'>Keep tabs on your academic journey with real-time progress tracking. Parents and educators can monitor performance, identify strengths, and address areas that need improvement.</p>
          </div>
        </div>
      </div>
      <div className="h-fit w-screen p-8 bg-sky-50">
        <div className="flex flex-col">
          <h1 className='text-4xl text-center text-gray-600'>🏫 For Educators</h1>
          <div className="flex flex-wrap justify-center gap-10 py-10">
            <div className="px-10 w-[600px]">
              <h2 className='text-xl font-light text-sky-400'>Empower Your Teaching</h2>
              <p className='text-sm font-light text-justify'>EduLearn provides a robust set of tools for educators to create, manage, and deliver content. From lesson planning to assessments, we've got you covered.</p>
            </div>
            <div className="px-10 w-[600px]">
              <h2 className='text-xl font-light text-sky-400'>Professional Development</h2>
              <p className='text-sm font-light text-justify'>Stay ahead in your field with our professional development resources. Access workshops, webinars, and resources to enhance your teaching skills.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className='text-4xl text-center text-gray-600'>🎓 For Students</h1>
          <div className="flex flex-wrap justify-center gap-10 py-10">
            <div className="px-10 w-[600px]">
              <h2 className='text-xl font-light text-sky-400'>Learning Made Fun</h2>
              <p className='text-sm font-light text-justify'>Say goodbye to monotony! EduLearn transforms learning into a fun and interactive experience, ensuring that students stay motivated and excited about their education.</p>
            </div>
            <div className="px-10 w-[600px]">
              <h2 className='text-xl font-light text-sky-400'>24/7 Access</h2>
              <p className='text-sm font-light text-justify'>Learning doesn't stop when the school bell rings. With EduLearn, students can access their courses anytime, anywhere, fostering a culture of continuous learning.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-600 text-white p-8">
        <h1 className='lg:text-2xl md:text-xl text-[14px] pb-4'>🌐 Join EduLearn Today and Embrace the Future of Education!</h1>
        <p className='text-sm font-light text-justfy'>Whether you're an educator looking to revolutionize your teaching methods or a student eager to embark on a journey of discovery, EduLearn is here to make education accessible, engaging, and effective.</p>
      </div>
      <Footer theme={'dark'} />
    </>
  )
}

export default page