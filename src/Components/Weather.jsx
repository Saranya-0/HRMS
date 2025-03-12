import React from 'react'
import { FaCloudSun } from "react-icons/fa";

function Weather() {
  return (
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
        <p className="text-xl font-bold text-pink-600">10:30 AM</p>
      </div>
    </div>
  )
}

export default Weather