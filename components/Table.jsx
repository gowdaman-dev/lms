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
      Type: 'Minato',
      Standard: "III standard",
      Phone_Number: 123,
      ERP_Number: 5454,
      Status: 'Active ',
      Details: 'View'

    },
    {
      Student_Name: 'deepath',
      id: 1,
      Type: 'Minato',
      Standard: "III standard",
      Phone_Number: 123,
      ERP_Number: 5454,
      Status: 'Active ',
      Details: 'View'

    },
    {
      Student_Name: 'deepath',
      id: 1,
      Type: 'Minato',
      Standard: "III standard",
      Phone_Number: 123,
      ERP_Number: 5454,
      Status: 'Active ',
      Details: 'View'

    },
    {
      Student_Name: 'deepath',
      id: 1,
      Type: 'Minato',
      Standard: "III standard",
      Phone_Number: 123,
      ERP_Number: 5454,
      Status: 'Active ',
      Details: 'View'

    },
    {
      Student_Name: 'deepath',
      id: 1,
      Type: 'Minato',
      Standard: "III standard",
      Phone_Number: 123,
      ERP_Number: 5454,
      Status: 'Active ',
      Details: 'View'

    }, {
      Student_Name: 'deepath',
      id: 1,
      Type: 'Minato',
      Standard: "III standard",
      Phone_Number: 123,
      ERP_Number: 5454,
      Status: 'Active ',
      Details: 'View'

    },

  ];
  const headings = Object.keys(data[0]);
  return (
    <div className='w-1/2 m-auto'>
      <TableContainer component={Paper} className='rounded-xl overflow-hidden'>
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
          <TableHead className='bg-blue-100'>
            <TableRow>
              {headings.map((heading) => (
                heading !== 'id' ? (
                  <TableCell key={heading}>{heading}</TableCell>
                ) :
                  null
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((value) => (
              <TableRow key={value.id} >

                {headings.map((heading) => (
                  heading === 'id' ? (
                    null
                  ) : heading === "Details" ? (
                    <TableCell key={heading} align="left"><button> {value[heading]} </button></TableCell>

                  ) :

                    (
                      <TableCell key={heading} align="left"><button> {value[heading]}</button></TableCell>
                    )
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default table

