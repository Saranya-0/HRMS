import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";




const attendanceData = [
    { day: "01", present: 8, late: 2 },
    { day: "02", present: 7, late: 3 },
    { day: "03", present: 9, late: 1 },
    { day: "04", present: 6, late: 4 },
  ];
function Attendance() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-lg font-bold mb-4">Attendance Statistics</h2>
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={attendanceData}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="present" fill="#4CAF50" />
        <Bar dataKey="late" fill="#FF9800" />
      </BarChart>
    </ResponsiveContainer>
  </div>
  )
}

export default Attendance