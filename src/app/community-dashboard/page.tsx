import { logout } from "@/app/actions/auth";
import { LogOut, Users, Video, FileText, Download } from "lucide-react";

export default function CommunityDashboard() {
  return (
    <main className="min-h-screen bg-background pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 bg-white p-6 border-2 border-border shadow-hard rounded-2xl">
          <div>
            <h1 className="text-4xl font-display text-foreground mb-2">Community Dashboard</h1>
            <p className="font-hand text-xl text-muted-foreground">Welcome to the inner circle! Access your exclusive resources below.</p>
          </div>
          <form action={logout} className="mt-4 md:mt-0">
            <button className="flex items-center px-6 py-3 bg-secondary text-foreground font-bold font-mono border-2 border-border shadow-hard hover:shadow-hard-hover hover:-translate-y-1 transition-all rounded-xl">
              <LogOut className="h-4 w-4 mr-2" /> Sign Out
            </button>
          </form>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-2xl border-2 border-border shadow-hard hover:shadow-hard-hover transition-all group">
            <div className="mb-6 h-16 w-16 bg-brand-gradient rounded-xl border-2 border-border flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <Video className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-display mb-3">Live Session Recordings</h3>
            <p className="font-hand text-lg text-muted-foreground mb-6">Catch up on all past design critiques and live tutorials.</p>
            <button className="text-accent font-bold font-mono uppercase tracking-wider text-sm hover:underline underline-offset-4">Watch Now →</button>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-border shadow-hard hover:shadow-hard-hover transition-all group">
            <div className="mb-6 h-16 w-16 bg-foreground rounded-xl border-2 border-border flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <Download className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-display mb-3">Asset Vault</h3>
            <p className="font-hand text-lg text-muted-foreground mb-6">Download premium vectors, brushes, and UI kits.</p>
            <button className="text-accent font-bold font-mono uppercase tracking-wider text-sm hover:underline underline-offset-4">Browse Vault →</button>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-border shadow-hard hover:shadow-hard-hover transition-all group">
            <div className="mb-6 h-16 w-16 bg-secondary rounded-xl border-2 border-border flex items-center justify-center text-foreground group-hover:scale-110 transition-transform">
              <FileText className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-display mb-3">Client Contract Templates</h3>
            <p className="font-hand text-lg text-muted-foreground mb-6">Bulletproof templates to use for your freelance business.</p>
            <button className="text-accent font-bold font-mono uppercase tracking-wider text-sm hover:underline underline-offset-4">Download Templates →</button>
          </div>

        </div>

      </div>
    </main>
  );
}
