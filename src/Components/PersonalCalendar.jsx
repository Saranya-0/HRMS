import React from 'react'
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function PersonalCalendar() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-lg font-bold mb-4">Personal Calendar</h2>
    <Calendar className="w-full" />
  </div>
  )
}

export default PersonalCalendar