'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../../Components/dashboard/Sidebar';
import TopNav from '../../Components/dashboard/TopNav';

export default function DashboardLayout({ children }) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  // Prevent hydration mismatch and hide content until authenticated
  if (!mounted) return <div className="min-h-screen bg-[#02050a]" />;

  return (
    <div className="flex min-h-screen bg-[#02050a] text-white selection:bg-indigo-500/30 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col relative overflow-hidden">
        <TopNav />
        {/* Glow effect for main content area */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <main className="flex-1 p-6 md:p-8 overflow-y-auto relative z-10 scrollbar-hide">
          {children}
        </main>
      </div>
    </div>
  );
}
