import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from 'react'

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
    <div className="w-screen h-full grid place-items-center">
      <div className='w-fit m-auto'>
        <TableContainer component={Paper} className='rounded-x'>
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
        </TableContainer>
      </div>
    </div>
  )
}

export default table

