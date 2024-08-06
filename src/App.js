import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import ChartLine from './components/ChartLine';
import ClipboardList from './components/ClipboardList';
import Wallet from './components/Wallet';
import ShoppingBag from './components/ShoppingBag';
import SignIn from './components/SignIn';
import Settings from './components/Settings';
import ActivityLog from './components/ActivityLog';
import Logout from './components/Logout';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="App">
        <Navbar toggleSidebar={toggleSidebar} />
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav" className={sidebarOpen ? '' : 'collapsed'}>
            <Sidebar />
          </div>
          <div id="layoutSidenav_content">
            <main>
              <Routes>
                <Route path="/" element={<Home />} /> {/* Default route */}
                <Route path="/home" element={<Home />} />
                <Route path="/chart-line" element={<ChartLine />} />
                <Route path="/clipboard-list" element={<ClipboardList />} />
                <Route path="/navbar" element={< Navbar />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/shopping-bag" element={<ShoppingBag />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/activity-log" element={<ActivityLog />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/sign-in" element={<SignIn />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
