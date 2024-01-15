
import React from 'react'

const table = () => {
    const data=[
        {
            Student_Name : 'deepath',
            id:1,
            Type: 'Minato',
            Standard: "III standard",
            Phone_Number: 123,
            ERP_Number: 5454,
            Status : 'Active ',
            Details : 'View' 

        }, 
          {
            Student_Name : 'deepath',
            id:1,
            Type: 'Minato',
            Standard: "III standard",
            Phone_Number: 123,
            ERP_Number: 5454,
            Status : 'Active ',
            Details : 'View' 

        },
        {
            Student_Name : 'deepath',
            id:1,
            Type: 'Minato',
            Standard: "III standard",
            Phone_Number: 123,
            ERP_Number: 5454,
            Status : 'Active ',
            Details : 'View' 

        },
        {
            Student_Name : 'deepath',
            id:1,
            Type: 'Minato',
            Standard: "III standard",
            Phone_Number: 123,
            ERP_Number: 5454,
            Status : 'Active ',
            Details : 'View' 

        },
        {
            Student_Name : 'deepath',
            id:1,
            Type: 'Minato',
            Standard: "III standard",
            Phone_Number: 123,
            ERP_Number: 5454,
            Status : 'Active ',
            Details : 'View' 

        },   {
            Student_Name : 'deepath',
            id:1,
            Type: 'Minato',
            Standard: "III standard",
            Phone_Number: 123,
            ERP_Number: 5454,
            Status : 'Active ',
            Details : 'View' 

        },

    ];
const headings = Object.keys(data[0]);
  return (
 

      <table className='m-auto my-10 rounded-xl'>
        <thead>
        <tr className=' rounded-tl-lg '>
          {headings.map((heading)=>(
            heading !== 'id' ? (
            <th key={heading} className='px-5 bg-cBlue border border-solid border-borHead border-1 rounded-t-20'>
                {heading}
            </th>
            ) :
            null
          ))}
        </tr>
        </thead>
        <tbody>
        {data.map((value) => (
          <tr key={value.id}>
            {headings.map((heading) => (
                heading === 'id' ? (
                    null
                  ) : heading ==="Details" ? (
                    <td key={heading} className='px-5 text-center border border-solid  border-1 '>
                       <button> {value[heading]} </button> 
                    </td>

                  ):
                  
                  (
                    <td key={heading} className='px-5 text-center border border-solid  border-1'>{value[heading]}</td>

                  )
            ))}
          </tr>
        ))}
      </tbody>
      </table>
 
  )
}

export default table

