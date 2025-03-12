import React from 'react'

function NoticesLeave() {
  return (
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
            <li>Casual Leave: <span className="text-green-600">6 Days</span></li>
            <li>Sick Leave: <span className="text-green-600">4 Days</span></li>
            <li>Annual Leave: <span className="text-green-600">10 Days</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NoticesLeave