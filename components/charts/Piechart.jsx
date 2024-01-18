"use client"
import React from 'react'
import { PieChart,Pie,ResponsiveContainer, Legend, Tooltip,Cell } from 'recharts'
function Peichart() {
    const data = [
        { name: 'Offline', value: 57 },
        { name: 'Online', value: 23 },
        
       
      ];
      const color=["#ff8fab","#48cae4"]
  return (
  <>
  <ResponsiveContainer width={"100%"} height={"100%"}>
<PieChart >
<Pie data={data} dataKey="value" innerRadius={60} outerRadius={80} paddingAngle={5} fill='blue' label>

     {data.map((item,i)=>{
        return          (   <Cell key={`cell-${i}`} fill={color[i % color.length]} />)

     })}
    </Pie>.
<Legend iconType='circle'/>
<Tooltip/>
</PieChart>

  </ResponsiveContainer>
  
  </>
  )
}

export default Peichart