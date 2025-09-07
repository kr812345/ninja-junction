'use client'
import React, { useState } from 'react';
import './styles.css'; // You'll need to move the CSS to a separate file

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [userName] = useState('User'); // Replace with actual user state management

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="bg-[var(--dark)] text-[var(--light)]">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold gradient-text">Ninja Junction</h1>
              </div>
            </div>
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
              <a href="/" className="nav-link text-gray-900 px-3 py-2 text-sm font-medium">Home</a>
              <a href="#projects" className="nav-link text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Projects</a>
              <a href="#stats" className="nav-link text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Stats</a>
              <a href="#settings" className="nav-link text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Settings</a>
            </div>
            <div className="flex items-center">
              <button className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="dashboard-hero">
        <div className="hero-content">
          <h2 className="text-4xl font-bold mb-2">Welcome, <span>{userName}</span> 👋</h2>
          <p className="text-lg text-gray-300">Here's what's happening with your projects today.</p>
        </div>
        <div className="hero-graphic">
          <img src="https://undraw.co/api/illustrations/1e98b431-c96f-4cf0-b0a0-774aa78a1392" alt="Dashboard Graphic" />
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="max-w-7xl mx-auto px-4 pb-12">
        {/* Projects Section */}
        <section id="projects" className="bg-[var(--light)] text-black p-6 rounded-2xl shadow-lg mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold">Your Projects</h3>
            <div className="flex gap-3">
              <select className="border rounded-lg p-2">
                <option value="all">All</option>
                <option value="Owner">Owner</option>
                <option value="Contributor">Contributor</option>
              </select>
              <button 
                onClick={() => setShowModal(true)}
                className="bg-[var(--primary)] hover:bg-[var(--secondary)] text-white px-4 py-2 rounded-lg transition"
              >
                + New Project
              </button>
            </div>
          </div>
          <div id="projects-container" className="grid md:grid-cols-3 gap-6">
            {/* Projects will be rendered here */}
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="stat-card">
            <h4 className="text-xl font-bold">Total Projects</h4>
            <p className="stat-number">0</p>
          </div>
          <div className="stat-card">
            <h4 className="text-xl font-bold">Owned</h4>
            <p className="stat-number">0</p>
          </div>
          <div className="stat-card">
            <h4 className="text-xl font-bold">Contributing</h4>
            <p className="stat-number">0</p>
          </div>
        </section>

        {/* Add Project Modal */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span onClick={() => setShowModal(false)} className="close-btn">&times;</span>
              <h3 className="text-2xl font-bold mb-4">Add New Project</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input type="text" placeholder="Project Title" required />
                <textarea placeholder="Project Description" required />
                <input type="url" placeholder="GitHub Link" required />
                <input type="text" placeholder="Tag / Keyword" required />
                <button type="submit" className="modal-submit">Add Project</button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
