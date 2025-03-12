import React from "react";
import {
  FaHome,
  FaProjectDiagram,
  FaMoneyBill,
  FaFileInvoice,
  FaBullseye,
  FaCog,
  FaBuilding,
} from "react-icons/fa";
import Logout from "../Components/Logout";

function Sidebar({ expanded, setExpanded }) {
  return (
    <div
      className={`fixed left-0 top-0 h-full bg-gray-900 text-white p-4 flex flex-col transition-all duration-300 z-40 ${
        expanded ? "w-64" : "w-20" }`}>
    
      <div
        className="flex items-center space-x-3 cursor-pointer mb-6 p-3 rounded-lg hover:bg-pink-500 hover:text-white transition"
        onClick={() => setExpanded(!expanded)} >
        <FaBuilding className="text-2xl text-pink-500" />
        {expanded && (
          <h1 className="text-lg font-bold transition hover:text-white">
            HRMS Portal
          </h1>
        )}
      </div>

      
      <nav className="flex flex-col space-y-2 flex-grow">
        <SidebarItem icon={FaHome} text="Overview" expanded={expanded} />
        <SidebarItem icon={FaProjectDiagram} text="Projects" expanded={expanded} />
        <SidebarItem icon={FaMoneyBill} text="Payroll" expanded={expanded} />
        <SidebarItem icon={FaFileInvoice} text="Invoices" expanded={expanded} />
        <SidebarItem icon={FaBullseye} text="Goals" expanded={expanded} />
        <SidebarItem icon={FaCog} text="Settings" expanded={expanded} />
      </nav>

   
      <Logout showIcon={true} expanded={expanded} className="mt-auto w-full text-left" />
    </div>
  );
}

/*  Reusable Sidebar */
const SidebarItem = ({ icon: Icon, text, expanded }) => (
  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-pink-500 hover:text-white cursor-pointer transition">
    <Icon className="text-xl" />
    {expanded && <span>{text}</span>}
  </div>
);

export default Sidebar;
