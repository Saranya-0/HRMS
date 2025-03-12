import React from 'react'

function Approval() {
  return (
    <div className="bg-white p-6 pb-60 rounded-lg shadow-md"> 
      <h2 className="text-lg font-bold mb-4">Approval</h2>
      <table className="w-full text-sm text-left text-gray-600">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3">Date of application</th>
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
  )
}

export default Approval
