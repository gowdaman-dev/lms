"use client"
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import React from 'react'

function AdminBar () {
 
  const data = [
    {
      month: 'jan',
      login:400,
      logout: 100
    },
    {
      month: 'Feb',
      login:700,
      logout: 200
    },
    {
      month: 'Mar',
      login:500,
      logout: 300
    },
    {
      month: 'Aip',
      login:800,
      logout: 400
    },
    {
      month: 'May',
      login:1300,
      logout: 500
    }
  ]

  return (
    <ResponsiveContainer width="100%" height="100%">

    <BarChart  data={data}  margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='month' />
      <YAxis dataKey="login" />
      <Tooltip />
      <Legend
            verticalAlign="top"
            align="center"
            height={36}
            iconType='circle'
          />
      <Bar dataKey="login" fill="skyblue" activeBar={<Rectangle fill="pink" stroke="black" />} />
      <Bar dataKey="logout" fill="pink" activeBar={<Rectangle fill="red" stroke="black" />} />
      


    </BarChart>
    </ResponsiveContainer>
  )
}

export default AdminBar
