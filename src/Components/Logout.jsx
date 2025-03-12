import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../Firebase/FirebaseConfig";
import { FaSignOutAlt } from "react-icons/fa";

function Logout({ showIcon = false, expanded = true, className = "" }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const user = auth.currentUser;
      console.log("Logging out user:", user); 

      await signOut(auth);
      console.log("User signed out successfully"); 

      toast.success(" Logout Successful!", { position: "top-center", autoClose: 3000 });

      setTimeout(() => {
        navigate("/signin");
      }, 3000);

    } catch (error) {
      console.error("Logout failed:", error); 
      toast.error("Logout failed: " + error.message, { position: "top-center" });
    }
  };

  return (
    <button
      onClick={handleLogout}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition hover:bg-pink-500 hover:text-white w-full ${className}`}>
      {showIcon && <FaSignOutAlt className="text-xl" />}
      {expanded && <span>Logout</span>}
    </button>
  );
}

export default Logout;
