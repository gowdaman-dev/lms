import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from 'react'
import Link from 'next/link';

const table = () => {
  const data = [
    {
      Student_Name: 'deepath',
      id: 1,
      Standard: "III standard",
      Phone_Number: 123,
      ERP_Number: 5454,
      Status: 'Active ',
      Details: 'View'

    },
    {
      Student_Name: 'deepath',
      id: 1,
      Standard: "III standard",
      Phone_Number: 123,
      ERP_Number: 5454,
      Status: 'Active ',
      Details: 'View'

    },
    {
      Student_Name: 'deepath',
      id: 1,
      Standard: "III standard",
      Phone_Number: 123,
      ERP_Number: 5454,
      Status: 'Active ',
      Details: 'View'

    },
    {
      Student_Name: 'deepath',
      id: 1,
      Standard: "III standard",
      Phone_Number: 123,
      ERP_Number: 5454,
      Status: 'Active ',
      Details: 'View'

    },
    {
      Student_Name: 'deepath',
      id: 1,
      Standard: "III standard",
      Phone_Number: 123,
      ERP_Number: 5454,
      Status: 'Active ',
      Details: 'View'

    }, {
      Student_Name: 'deepath',
      id: 1,
      Standard: "III standard",
      Phone_Number: 123,
      ERP_Number: 5454,
      Status: 'Active ',
      Details: 'View'

    },

  ];
  const headings = Object.keys(data[0]);

  return (
    <div className="w-full border-b rounded-lg overflow-hidden">
      <table className='w-full'>
        <tr className='border-b text-center bg-blue-100 text-gray-600'>
          {
            headings.map((heading => {
              return (
                heading !== 'id' ? (
                  <th key={heading} className='p-2 text-center'>{heading}</th>
                ) : null
              )
            }))
          }
        </tr>
        {
          data.map((value) => {
            return <tr key={value['id']} className='border-b'>
              {
                headings.map((header)=>{
                  return (
                    header === 'id'?null:
                    header === 'Details'?<td key={value['id']} className='text-center'><Link href={value[header]}>{value[header]}</Link></td>:
                    (
                      <td key={value['id']} className='text-center'>{value[header]}</td>
                    )
                  )
                })
              }
            </tr>
          })
        }
      </table>
    </div>
  )
}
export default table



{/* <TableContainer component={Paper} className='rounded-x w-full'>
        <Table className='w-full' aria-label="simple table">
          <TableHead className='bg-lBlue'>
            <TableRow>
              {headings.map((heading) => (
                heading !== 'id' ? (
                  <TableCell className='px-2 py-1 border border-1 border-borHead' align='center' key={heading}>{heading}</TableCell>
                ) :
                  null
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((value) => (
              <TableRow key={value.id}  >

                {headings.map((heading) => (
                  heading === 'id' ? (
                    null
                  ) : heading === "Details" ? (
                    <TableCell key={heading} className='px-2 py-1 border border-1 border-borData' align="center"><button> {value[heading]} </button></TableCell>

                  ) :

                    (
                      <TableCell key={heading} className='px-2 py-1 border border-1 border-borData' align="center"><button> {value[heading]}</button></TableCell>
                    )
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}