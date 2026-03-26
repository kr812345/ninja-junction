'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { FiHome, FiUsers, FiCalendar, FiMessageSquare, FiSettings, FiX } from 'react-icons/fi';
import { AnimatePresence } from 'motion/react';

const navItems = [
  { name: 'Overview', href: '/dashboard', icon: FiHome },
  { name: 'Members', href: '/dashboard/members', icon: FiUsers },
  { name: 'Events', href: '/dashboard/events', icon: FiCalendar },
  { name: 'Contacts', href: '/dashboard/contacts', icon: FiMessageSquare },
];

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();

  const SidebarContent = (
    <div className="w-64 h-full bg-[#070b14] flex flex-col p-6 shadow-2xl md:shadow-none">
      <div className="mb-12 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white shadow-lg">
            N
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Ninja Admin
          </span>
        </div>
        <button onClick={onClose} className="md:hidden text-gray-400 hover:text-white p-1">
          <FiX className="text-xl" />
        </button>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.name} href={item.href} onClick={onClose}>
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

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex sticky top-0 h-screen border-r border-white/10 z-50">
        {SidebarContent}
      </aside>

      {/* Mobile Sidebar (Drawer) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="md:hidden fixed inset-y-0 left-0 z-[101]"
            >
              {SidebarContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
