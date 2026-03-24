'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { FiHome, FiUsers, FiCalendar, FiMessageSquare, FiSettings } from 'react-icons/fi';

const navItems = [
  { name: 'Overview', href: '/dashboard', icon: FiHome },
  { name: 'Members', href: '/dashboard/members', icon: FiUsers },
  { name: 'Events', href: '/dashboard/events', icon: FiCalendar },
  { name: 'Contacts', href: '/dashboard/contacts', icon: FiMessageSquare },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-[#070b14] border-r border-white/10 flex flex-col p-6 sticky top-0 hidden md:flex z-50">
      <div className="mb-12 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white shadow-lg">
          N
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Ninja Admin
        </span>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.name} href={item.href}>
              <div
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all relative overflow-hidden group ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute inset-0 bg-white/10 border border-white/10 rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <item.icon className={`text-lg relative z-10 transition-transform group-hover:scale-110 ${isActive ? 'text-indigo-400' : ''}`} />
                <span className="font-medium relative z-10">{item.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto">
        <button className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-colors w-full rounded-xl hover:bg-white/5 group">
          <FiSettings className="text-lg group-hover:rotate-90 transition-transform duration-500" />
          <span className="font-medium">Settings</span>
        </button>
      </div>
    </div>
  );
}
