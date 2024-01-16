import React from "react";
import { FaChartColumn, FaChartLine } from "react-icons/fa6";
const today = 144;
const title = "Welcome";
const total = 300;
const Survey = () => {
  return (
    <ul className="w-screen mt-10">
      <div className="w-2/3 mx-auto  flex  sm:flex-row flex-col lg:flex-row justify-between items-center ">
      <p className="sm:hidden py-2 flex text-2xl text-blue-500">{title}</p>
        <div className="flex gap-10">
          <li>
            <FaChartColumn className="text-hBlue mt-2" />{" "}
          </li>
          <div>
            <li className="">Today Logins</li>
            <li>{today}</li>
          </div>
        </div>
        <li className="sm:flex hidden">{title}</li>
        <div className="flex gap-10 text-center">
          <li>
            <FaChartLine />
          </li>
          <div>
            <li>Total Students</li>
            <li>{total}</li>
          </div>
        </div>
      </div>
    </ul>
  );
};

export default Survey;
