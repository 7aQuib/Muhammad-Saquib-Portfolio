import { logout } from "@/app/actions/auth";
import { LogOut, Settings, Users, Activity, Briefcase } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-background pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 bg-white p-6 border-2 border-border shadow-hard rounded-2xl">
          <div>
            <div className="inline-block px-3 py-1 bg-brand-gradient text-white border-2 border-border rounded-full text-xs font-mono font-bold tracking-wider mb-2">
              MASTER ADMIN
            </div>
            <h1 className="text-4xl font-display text-foreground mb-2">Control Panel</h1>
            <p className="font-hand text-xl text-muted-foreground">Manage your portfolio, users, and leads.</p>
          </div>
          <form action={logout} className="mt-4 md:mt-0">
            <button className="flex items-center px-6 py-3 bg-secondary text-foreground font-bold font-mono border-2 border-border shadow-hard hover:shadow-hard-hover hover:-translate-y-1 transition-all rounded-xl">
              <LogOut className="h-4 w-4 mr-2" /> Sign Out
            </button>
          </form>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 border-2 border-border shadow-hard rounded-2xl">
            <span className="text-muted-foreground font-mono text-sm uppercase tracking-wider font-bold">Total Users</span>
            <div className="text-4xl font-display text-foreground mt-2">1,204</div>
          </div>
          <div className="bg-white p-6 border-2 border-border shadow-hard rounded-2xl">
            <span className="text-muted-foreground font-mono text-sm uppercase tracking-wider font-bold">New Leads</span>
            <div className="text-4xl font-display text-accent mt-2">48</div>
          </div>
          <div className="bg-white p-6 border-2 border-border shadow-hard rounded-2xl">
            <span className="text-muted-foreground font-mono text-sm uppercase tracking-wider font-bold">Active Projects</span>
            <div className="text-4xl font-display text-foreground mt-2">12</div>
          </div>
          <div className="bg-white p-6 border-2 border-border shadow-hard rounded-2xl">
            <span className="text-muted-foreground font-mono text-sm uppercase tracking-wider font-bold">Site Visits</span>
            <div className="text-4xl font-display text-foreground mt-2">8.4k</div>
          </div>
        </div>

        {/* Quick Actions */}
        <h2 className="text-3xl font-display mb-8">Management Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-8 rounded-2xl border-2 border-border shadow-hard flex gap-6 hover:shadow-hard-hover transition-all group">
            <div className="h-16 w-16 bg-foreground rounded-xl border-2 border-border flex items-center justify-center text-white shrink-0 group-hover:-rotate-6 transition-transform">
              <Users className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-2xl font-display mb-2">Community Members</h3>
              <p className="font-hand text-lg text-muted-foreground mb-4">View and manage registered users in your community.</p>
              <button className="text-accent font-bold font-mono text-sm uppercase tracking-wider">Manage Users →</button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-border shadow-hard flex gap-6 hover:shadow-hard-hover transition-all group">
            <div className="h-16 w-16 bg-brand-gradient rounded-xl border-2 border-border flex items-center justify-center text-white shrink-0 group-hover:rotate-6 transition-transform">
              <Briefcase className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-2xl font-display mb-2">Portfolio Data</h3>
              <p className="font-hand text-lg text-muted-foreground mb-4">Update local project data and API integrations.</p>
              <button className="text-accent font-bold font-mono text-sm uppercase tracking-wider">Edit Data →</button>
            </div>
          </div>
          
        </div>

      </div>
    </main>
  );
}
