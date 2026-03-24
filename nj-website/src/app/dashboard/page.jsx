'use client';
import { motion } from 'motion/react';
import { FiUsers, FiCalendar, FiMessageSquare, FiTrendingUp } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { fetchMembers, fetchEvents, fetchContacts } from '../../Services/api.admin';

const StatCard = ({ title, value, icon: Icon, trend, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 relative overflow-hidden group hover:border-indigo-500/50 transition-colors shadow-2xl"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-indigo-500/20 transition-colors duration-500" />
    <div className="flex items-center justify-between mb-4 relative z-10">
      <h3 className="text-gray-400 font-medium text-sm lg:text-base">{title}</h3>
      <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform text-indigo-400 shadow-inner">
        <Icon className="text-xl" />
      </div>
    </div>
    <div className="relative z-10 flex items-end justify-between">
      <p className="text-4xl font-bold tracking-tight text-white">{value}</p>
      <span className="text-xs lg:text-sm font-medium text-emerald-400 flex items-center gap-1 bg-emerald-400/10 px-2 py-1 rounded-full">
        <FiTrendingUp /> {trend}
      </span>
    </div>
  </motion.div>
);

export default function DashboardPage() {
  const [stats, setStats] = useState({ members: 0, events: 0, contacts: 0 });

  useEffect(() => {
    const loadStats = async () => {
      try {
        const [mRes, eRes, cRes] = await Promise.all([
          fetchMembers().catch(() => ({ members: [] })),
          fetchEvents().catch(() => []),
          fetchContacts().catch(() => ({ contacts: [] }))
        ]);
        setStats({
          members: mRes.members?.length || 0,
          events: eRes.length || 0,
          contacts: cRes.contacts?.length || 0
        });
      } catch (err) {
        console.error("Error loading stats", err);
      }
    };
    loadStats();
  }, []);

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-1">
            Dashboard Overview
          </h1>
          <p className="text-gray-400 text-sm font-medium">Welcome back to your command center.</p>
        </div>
        {/* <button className="px-5 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-xl transition-all shadow-lg shadow-indigo-500/25 active:scale-95 border border-white/10">
          Generate Report
        </button> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Applications" value={stats.members} icon={FiUsers} trend="+12%" delay={0.1} />
        <StatCard title="Active Events" value={stats.events} icon={FiCalendar} trend="+2%" delay={0.2} />
        <StatCard title="New Messages" value={stats.contacts} icon={FiMessageSquare} trend="+5%" delay={0.3} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl"
        >
          <div className="flex items-center justify-between mb-6">
             <h3 className="text-xl font-bold text-white">Recent Activity</h3>
             <button className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium">View All</button>
          </div>
          <div className="flex items-center justify-center h-64 border border-dashed border-white/10 rounded-2xl bg-black/20">
            <p className="text-gray-500 text-sm font-medium">Activity feed connected to database will appear here</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl"
        >
          <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
          <div className="space-y-3">
             {['Create New Event', 'Review Applications', 'Manage Users'].map((action, i) => (
               <button key={i} className="w-full text-left px-5 py-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-indigo-500/30 rounded-2xl text-sm font-medium text-gray-300 hover:text-white transition-all group flex justify-between items-center">
                 {action}
                 <span className="text-gray-600 group-hover:text-indigo-400 transition-colors transform group-hover:translate-x-1">→</span>
               </button>
             ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
