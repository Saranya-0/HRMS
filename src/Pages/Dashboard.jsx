import React from 'react'
import { FaCloudSun } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const attendanceData = [
  { day: "01", present: 8, late: 2 },
  { day: "02", present: 7, late: 3 },
  { day: "03", present: 9, late: 1 },
  { day: "04", present: 6, late: 4 },
];

function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-white shadow-md p-6 rounded-lg flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <FaCloudSun className="text-yellow-500 text-3xl" />
          <div>
            <p className="text-lg font-bold">Today</p>
            <p className="text-gray-500">Partly Cloudy</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-gray-500">Entry Time</p>
          <p className="text-xl font-bold text-pink-600">10:11 AM</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        {/* Approval List */}
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Approval</h2>
          <table className="w-full text-sm text-left text-gray-600">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3">Date</th>
                <th className="p-3">Application Type</th>
                <th className="p-3">Duration</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3">03/01/2025</td>
                <td className="p-3">Casual Leave</td>
                <td className="p-3">03 Days</td>
                <td className="p-3 text-yellow-500">Pending</td>
              </tr>
              <tr>
                <td className="p-3">08/02/2025</td>
                <td className="p-3">Late Entry</td>
                <td className="p-3">1 Day</td>
                <td className="p-3 text-red-500">Rejected</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Personal Calendar */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Personal Calendar</h2>
          <Calendar className="w-full" />
        </div>
      </div>

      {/* Attendance & Notices */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        {/* Attendance Statistics */}
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
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

       
        {/* Notices & Leave Credit in Row */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
          <h2 className="text-lg font-bold mb-4">Notices & Leave Credit</h2>
          <div className="flex justify-between">
            <div>
              <h3 className="text-md font-semibold mb-2">Notices</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="hover:text-pink-600 cursor-pointer">Annual Retreat - Announcement</li>
                <li className="hover:text-pink-600 cursor-pointer">Public Holidays Update</li>
              </ul>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-2">Leave Credit</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Casual Leave: <span className="text-green-600">5 Days</span></li>
                <li>Sick Leave: <span className="text-green-600">3 Days</span></li>
                <li>Annual Leave: <span className="text-green-600">10 Days</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard