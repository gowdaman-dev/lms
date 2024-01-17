"use client";
import React, { useEffect } from "react";

const table = () => {
  const data = [
    //  data array
    {
      Student_Name: "deepath",
      id: 1,
      Type: "Minato",
      Standard: "III standard",
      Phone_Number: 123,
      ERP_Number: 5454,
      Status: "Active ",
      Details: "View",
    },
    {
      Student_Name: "deepath",
      id: 2,
      Type: "Minato",
      Standard: "III standard",
      Phone_Number: 123,
      ERP_Number: 5454,
      Status: "Active ",
      Details: "View",
    },
    {
      Student_Name: "deepath",
      id: 3,
      Type: "Minato",
      Standard: "III standard",
      Phone_Number: 123,
      ERP_Number: 5454,
      Status: "Active ",
      Details: "View",
    },
    {
      Student_Name: "deepath",
      id: 4,
      Type: "Minato",
      Standard: "III standard",
      Phone_Number: 123,
      ERP_Number: 5454,
      Status: "Active ",
      Details: "View",
    },
    {
      Student_Name: "deepath",
      id: 5,
      Type: "Minato",
      Standard: "III standard",
      Phone_Number: 123,
      ERP_Number: 5454,
      Status: "Active ",
      Details: "View",
    },
    {
      Student_Name: "deepath",
      id: 6,
      Type: "Minato",
      Standard: "III standard",
      Phone_Number: 123,
      ERP_Number: 5454,
      Status: "Active ",
      Details: "View",
    },
  ];

  const headings = Object.keys(data[0]);



  return (
    <div className="flex justify-center overflow-x-auto">
      <table className="w-[72%]">
        <thead>
          <tr className="border-b text-center bg-blue-100 text-gray-600">
            {headings.map((heading) =>
              heading !== "id" ? (
                <th key={heading} className="p-2 text-center">
                  {heading}
                </th>
              ) : null
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((value) => (
            <tr key={value["id"]} className="border-b">
              {headings.map((header) =>
                header === "id" ? null : header === "Details" ? (
                  <td key={value["id"]} className="text-center">
                   {value[header]}
                  </td>
                ) : (
                  <td key={value["id"]} className="text-center">
                    {value[header]}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
  );
};

export default table;
