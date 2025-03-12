import React, { useState } from "react";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";
import Weather from "../Components/Weather";
import Approval from "../Components/Approval";
import PersonalCalendar from "../Components/PersonalCalendar";
import Attendance from "../Components/Attendance";
import NoticesLeave from "../Components/NoticesLeave";

function Dashboard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative min-h-screen flex">
    
      <Sidebar expanded={expanded} setExpanded={setExpanded} />

      
      <div
        className="flex-1 transition-all duration-300"
        style={{ marginLeft: expanded ? "256px" : "80px" }}>
       
        <Navbar expanded={expanded} />

       
        <div className="p-6 bg-gray-100 mt-16">
          <Weather />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="col-span-2">
              <Approval />
            </div>
            <PersonalCalendar />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="col-span-2">
              <Attendance />
            </div>
            <NoticesLeave />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
