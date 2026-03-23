"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Briefcase, Box, Settings, LogOut } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Projects", href: "/admin/projects", icon: Briefcase },
    { name: "Services", href: "/admin/services", icon: Box },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#050505] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0A0A0A] border-r border-glass hidden md:flex flex-col">
        <div className="h-20 flex items-center px-8 border-b border-glass">
          <span className="font-bold text-xl tracking-tight text-white">Admin<span className="text-brand-purple">Panel</span></span>
        </div>
        
        <div className="flex-1 py-6 px-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive 
                  ? "bg-brand-purple/10 text-brand-purple font-medium" 
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon size={20} className={isActive ? "text-brand-purple" : "opacity-70"} />
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-glass">
          <button className="flex w-full items-center gap-3 px-4 py-3 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-all">
            <LogOut size={20} className="opacity-70" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Container */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header Placeholder */}
        <header className="h-20 bg-[#0A0A0A] border-b border-glass flex items-center justify-between px-8 shrink-0">
          <div className="md:hidden font-bold text-xl">AdminPanel</div>
          <div className="flex-1 flex border border-glass w-full max-w-md mx-auto hidden md:flex items-center gap-2 px-4 py-2 bg-[#111111] rounded-full">
            <span className="text-gray-500 text-sm">Welcome back, Vignesh! (Supabase not connected yet)</span>
          </div>
        </header>
        
        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-8 lg:p-12 relative isolate">
          {/* Ambient glow */}
          <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-brand-purple/10 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
          <div className="relative z-10 w-full max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
