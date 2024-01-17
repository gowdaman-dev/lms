import React from "react";
import { FaChartColumn, FaChartLine } from "react-icons/fa6";
const today = 144;
const title = "Welcome";
const total = 300;
const Survey = () => {
  return (
    <div className="flex w-full pb-4 md:flex-row flex-col lg:flex-row justify-between items-center gap-4 ">
      <p className="md:hidden py-2 flex text-2xl text-blue-500">{title}</p>
      <div className="flex gap-10 text-center bg-blue-50 py-4 px-10 rounded-lg md:w-fit w-full justify-center ">
        <div>
          <FaChartColumn className="text-hBlue mt-2 text-4xl " />
        </div>
        <div>
          <p className="">Today Logins</p>
          <p>{today}</p>
        </div>
      </div>
      <p className="md:flex hidden text-3xl text-blue-500">{title}</p>
      <div className="flex gap-10 text-center bg-blue-50 py-4 px-10 rounded-lg md:w-fit w-full justify-center">
        <div>
          <FaChartLine className="text-hBlue mt-2 text-4xl" />
        </div>
        <div>
          <div>Total Students</div>
          <div>{total}</div>
        </div>
      </div>
    </div>
  );
};

export default Survey;
