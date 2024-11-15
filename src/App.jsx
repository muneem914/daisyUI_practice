import { useState, useEffect } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoIosCheckboxOutline } from "react-icons/io";
import { HiOutlineUsers } from "react-icons/hi2";

import "./App.scss";

import Navbar from "./components/Navbar";

function App() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setDate(now.toLocaleDateString());
      setTime(now.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="mx-auto">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <Navbar />
            <div className="gratings">
              <div className="admin">
                <h1>Welcome !</h1>
                <h2>
                  Muneem Hussain <span>(Admin)</span>
                </h2>
              </div>
              <div className="date_time">
                <h4>
                  Today's Date: <span>{date}</span>
                </h4>
                <h3>
                  Current Time: <span>{time}</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="menu bg-base-200 min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <div className="mx-auto mt-4">
                <h1 className=" text-xl lg:hidden md:inline-block">
                  Admin Panel
                </h1>
                <ul className="menu menu-lg bg-base-200 rounded-box w-56">
                  <li>
                    <a>
                      <AiOutlineDashboard size={24} />
                      Dashboard
                    </a>
                  </li>
                  <li>
                  <a>
                      <IoIosCheckboxOutline  size={24} />
                      Checklist
                    </a>
                  </li>
                  <li>
                  <a>
                      <HiOutlineUsers  size={24} />
                      Users
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
