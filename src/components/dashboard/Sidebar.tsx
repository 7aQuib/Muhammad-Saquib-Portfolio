"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, Clock, Target, Calendar, MessageSquare, Briefcase, FileText, Settings, ShieldAlert } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "Overview", icon: <LayoutDashboard className="w-5 h-5" /> },
    { href: "/dashboard/courses", label: "Courses", icon: <BookOpen className="w-5 h-5" /> },
    { href: "/dashboard/challenges", label: "Challenges", icon: <Target className="w-5 h-5" /> },
    { href: "/dashboard/events", label: "Events", icon: <Calendar className="w-5 h-5" /> },
    { href: "/dashboard/jobs", label: "Jobs", icon: <Briefcase className="w-5 h-5" /> },
    { href: "/dashboard/prompts", label: "Prompts", icon: <MessageSquare className="w-5 h-5" /> },
    { href: "/dashboard/resources", label: "Resources", icon: <FileText className="w-5 h-5" /> },
    { href: "/dashboard/settings", label: "Settings", icon: <Settings className="w-5 h-5" /> },
  ];

  const adminLinks = [
    { href: "/dashboard/admin", label: "Admin Panel", icon: <ShieldAlert className="w-5 h-5" /> },
  ];

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 border-r border-border bg-sidebar hidden md:flex flex-col z-20">
      <div className="h-16 flex items-center px-6 border-b border-border">
        <span className="font-display font-bold text-xl tracking-tight text-foreground">DesignSpace.</span>
      </div>
      
      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-6">
        <nav className="space-y-1">
          <p className="px-2 text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground mb-3">Main Menu</p>
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors font-medium ${
                pathname === link.href 
                  ? "bg-accent/10 text-accent font-bold" 
                  : "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
              }`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>

        <nav className="space-y-1">
          <p className="px-2 text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground mb-3 text-red-500/80">Admin</p>
          {adminLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors font-medium ${
                pathname.startsWith(link.href) 
                  ? "bg-red-500/10 text-red-500 font-bold" 
                  : "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
              }`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">
            J
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">Jane Doe</p>
            <p className="text-xs text-muted-foreground">Pro Member</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
