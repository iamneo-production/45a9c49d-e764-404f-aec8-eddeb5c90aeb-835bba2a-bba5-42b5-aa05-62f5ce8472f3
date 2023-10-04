import React, { useState } from 'react';
import '../Assests/css/Sidebar.css';
import 'boxicons/css/boxicons.min.css';
import Navbar from './Navbar';
import DashBoard from './DashBoard';
import Remainders from './Remainders';
import Serviceproviders from './Serviceproviders';
import Manageexpenses from './Manageexpenses';
import '../Assests/css/OwnerDashboard.css';

function OwnerDashboard() {
  const [currPage, setCurrPage] = useState("dashboard");

  return (
    <div className="user-dashboard">
      <Navbar />
      <div className="sidebar">
        <ul>
          <li onClick={() => setCurrPage("dashboard")}>
            <i className='bx bxs-dashboard'></i>
            <span>Dashboard</span>
          </li>
          <li onClick={() => setCurrPage("append-house")}>
            <i className='bx bxs-home-heart'></i>
            <span>List of Houses</span>
          </li>
          <li onClick={() => setCurrPage("remainders")}>
            <i className='bx bxs-alarm'></i>
            <span>Reminders</span>
          </li>
          <li onClick={() => setCurrPage("service-providers")}>
            <i className='bx bx-error-alt'></i>
            <span>Service Providers</span>
          </li>
          <li onClick={() => setCurrPage('manage-expenses')}>
            <i className='bx bxs-dollar-circle'></i>
            <span>Manage Expenses</span>
          </li>
        </ul>
      </div>
      <div className="dashboard-section">
        {currPage === "dashboard" && <DashBoard />}
        {currPage === "remainders" && <Remainders />}
        {currPage === "service-providers" && <Serviceproviders />}
        {currPage === "manage-expenses" && <Manageexpenses />}
      </div>
      
    </div>
  );
}

export default OwnerDashboard;
