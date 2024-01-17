"use client"
import React from 'react'
import { Bar} from 'react-chartjs-2'
import { Chart as chartjs } from 'chart.js/auto'

function AdminBarMonth() {
  
  const chart={
    labels:["jan","Feb","Mar","Apr","May","Jun","Jul"],
    datasets:[{
      label:"Monthly Analysis",
      data:[300,400,700,1000,200,100,700],
   
    borderRadius:3,
    bodyColor:"red"
    }]
    

  }
  const options = {
    scales: {
      x: {
        ticks: {
          color: 'blue', // Change x-axis label color
        },
      },
      y: {
        ticks: {
          color: 'blue',
          // Change y-axis label color
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'black', // Change legend text color
         
        },
      },
    },
  };
  return (
   <Bar data={chart} options={options} />
  )
}

export default AdminBarMonth