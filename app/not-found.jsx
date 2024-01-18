import Footer from "@/components/footer/Footer";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Notfound() {
  return (
    <>
      <div className="h-fit min-w-screen">
        <div className="py-2 px-10 bg-[#F2F5F9] flex justify-between items-center">
          <h1 className="text-xl text-sky-600">Edulearn</h1>
          <Image
            src={
              "data:image/jpeg;base64,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"
            }
            height={45}
            width={45}
            className="rounded-full border"
          />
        </div>
      </div>
      
      <div className="homebg w-screen h-fit">
        <div className="h-full py-10 w-full bg-sky-100/[.9] grid place-items-center">
          <div className="flex flex-col gap-10 item-center justify-center">
            <h1 className="md:text-6xl text-5xl font-black text-sky-400 tracking-widest text-center">
            404 Page Not Found
            </h1>
            <p className="md:w-[700px] w-full px-10 text-center text-gray-600 text-sm font-light">
              {" "}
              Oops! It seems like the lesson plan for this page is missing.
              Let's navigate back to the Dashboard and continue the journey of
              knowledge together
            </p>
            <Link href={'dashboard'} className=" mx-auto text-center px-2 py-1 border rounded-[40px] transition-color easeinout duration-500 hover:bg-sky-300 hover:text-white font-light border-sky-400 text-gray-600 w-fit">Dashboard</Link>
          </div>
        </div>
      </div>
      <div className="h-fit w-screen p-8 bg-sky-50">
        <div className="flex flex-col">
          <h1 className="text-4xl text-center text-gray-600">
            🏫 For Educators
          </h1>
          <div className="flex flex-wrap justify-center gap-10 py-10">
            <div className="px-10 w-[600px]">
              <h2 className="text-xl font-light text-sky-400">
                Empower Your Teaching
              </h2>
              <p className="text-sm font-light text-justify">
                EduLearn provides a robust set of tools for educators to create,
                manage, and deliver content. From lesson planning to
                assessments, we've got you covered.
              </p>
            </div>
            <div className="px-10 w-[600px]">
              <h2 className="text-xl font-light text-sky-400">
                Professional Development
              </h2>
              <p className="text-sm font-light text-justify">
                Stay ahead in your field with our professional development
                resources. Access workshops, webinars, and resources to enhance
                your teaching skills.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl text-center text-gray-600">
            🎓 For Students
          </h1>
          <div className="flex flex-wrap justify-center gap-10 py-10">
            <div className="px-10 w-[600px]">
              <h2 className="text-xl font-light text-sky-400">
                Learning Made Fun
              </h2>
              <p className="text-sm font-light text-justify">
                Say goodbye to monotony! EduLearn transforms learning into a fun
                and interactive experience, ensuring that students stay
                motivated and excited about their education.
              </p>
            </div>
            <div className="px-10 w-[600px]">
              <h2 className="text-xl font-light text-sky-400">24/7 Access</h2>
              <p className="text-sm font-light text-justify">
                Learning doesn't stop when the school bell rings. With EduLearn,
                students can access their courses anytime, anywhere, fostering a
                culture of continuous learning.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-600 text-white p-8">
        <h1 className="lg:text-2xl md:text-xl text-[14px] pb-4">
          🌐 Join EduLearn Today and Embrace the Future of Education!
        </h1>
        <p className="text-sm font-light text-justfy">
          Whether you're an educator looking to revolutionize your teaching
          methods or a student eager to embark on a journey of discovery,
          EduLearn is here to make education accessible, engaging, and
          effective.
        </p>
      </div>
      <Footer theme={"dark"} />
    </>
  );
}

export default Notfound;
