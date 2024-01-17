'use client'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

import React from 'react'

function AdminLine () {
  const data = [
    {
      Time: 8,
      login: 400,
      logout: 100
    },
    {
      Time: 9,
      login: 700,
      logout: 200
    },
    {
      Time: 10,
      login: 500,
      logout: 300
    },
    {
      Time: 11,
      login: 800,
      logout: 400
    },
    {
      Time: 12,
      login: 1300,
      logout: 500
    }
  ]

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart data={data}  margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='Time' />
        <YAxis dataKey='login' />
        <Tooltip />
        <Legend
          verticalAlign='top'
          align='center'
          height={36}
          iconType='circle'
        />
        <Line
          type='monotone'
          dataKey='login'
          stroke='skyblue'
          activeDot={{ r: 8 }}
        />
        <Line
          type='monotone'
          dataKey='logout'
          stroke='pink'
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default AdminLine
