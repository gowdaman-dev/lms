import React from "react";
import { FaChartColumn, FaChartLine } from "react-icons/fa6";
const today = 144;
const title = "Welcome";
const total = 300;
const Survey = () => {
  return (
    <ul className="w-screen mt-10">
      <div className="w-2/3 mx-auto  flex  flex-wrap lg:flex-row justify-between ">
        <div className="flex gap-10">
          <li>
            <FaChartColumn className="text-hBlue mt-2 text-4xl " />
          </li>
          <div>
            <li className="">Today Logins</li>
            <li>{today}</li>
          </div>
        </div>
        <li className="">{title}</li>
        <div className="flex gap-10 text-center">
          <li>
            <FaChartLine className="text-hBlue mt-2 text-4xl" />
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
