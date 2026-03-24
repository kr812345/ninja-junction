'use client';
import { useRouter } from 'next/navigation';
import { FiLogOut, FiBell, FiSearch, FiMenu } from 'react-icons/fi';
import toast from 'react-hot-toast';

export default function TopNav() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    toast.success('Logged out securely');
    router.push('/login');
  };

  return (
    <header className="h-20 bg-[#070b14]/80 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-6 md:px-8 sticky top-0 z-40">
      <div className="flex items-center gap-4 flex-1">
        <button className="md:hidden text-gray-400 hover:text-white p-2">
           <FiMenu className="text-2xl" />
        </button>
        <div className="relative w-full max-w-sm hidden md:block">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search resources..."
            className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-mono"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <button className="relative text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5">
          <FiBell className="text-xl" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#070b14]"></span>
        </button>

        <div className="hidden md:block w-px h-6 bg-white/10"></div>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 flex-shrink-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-sm text-white border border-white/20 shadow-md">
            AD
          </div>
          <button
            onClick={handleLogout}
            className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-pink-400 transition-colors px-2 py-1 rounded-lg hover:bg-white/5"
          >
            <FiLogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}
