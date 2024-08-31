import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex">
      {isOpen && (
        <div className="px-4  space-y-4 bg-red-500 text-white w-60  min-h-screen">
          <Link to="/">
            <div className="w-full mt-6 hover:bg-red-200 text-center py-2 rounded-sm">
              <p>Home</p>
            </div>
          </Link>

          <div>
            <Link to="/about">
              <div className="w-full hover:bg-red-200 text-center py-2 rounded-sm">
                <p>About</p>
              </div>
            </Link>
          </div>
        </div>
      )}

      <div className="ml-6 mt-6">
        <div className="mb-6">
          <button
            className="bg-red-400 text-white px-3 "
            onClick={toggleSidebar}
          >
            {isOpen ? "Close Sidebar" : "Open Sidebar"}
          </button>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
