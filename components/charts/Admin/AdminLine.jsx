'use client'
import {
  AreaChart,
  Area,
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
      logout: 150
    },
    {
      Time: 10,
      login: 500,
      logout: 170
    },
    {
      Time: 11,
      login: 800,
      logout: 400
    },
    {
      Time: 12,
      login: 1300,
      logout: 550
    }
  ]

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <AreaChart data={data}  margin={{
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
        <Area
        type="monotone"
          dataKey='login'
          stroke='#3ec2c0'
          fill='skyblue'
          activeDot={{ r: 8 }}
        />
        <Area
          dataKey='logout'
          stroke='#b612db'
          fill='#D4C1E9'
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default AdminLine
