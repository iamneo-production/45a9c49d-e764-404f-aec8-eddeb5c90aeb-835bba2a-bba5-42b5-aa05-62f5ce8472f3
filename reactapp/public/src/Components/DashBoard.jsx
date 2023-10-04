import React from 'react';
import Sidebar from './Sidebar';
import '../Assests/css/OwnerDashboard.css';
import '../Assests/css/Footer.css';
import Footer from './Footer';
import '../Assests/css/Dashboard.css';

export default function DashBoard() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <div className="user-dashboard">
          <div className="dashboard-section">
            <h2>Monthly Expenses</h2>
            {/* Your content for monthly expenses */}
          </div>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
}
