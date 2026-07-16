import { ReactNode } from "react";

export function StatsCard({ 
  title, 
  value, 
  icon,
  trend,
  trendPositive
}: { 
  title: string; 
  value: string | number; 
  icon: ReactNode;
  trend?: string | number;
  trendPositive?: boolean;
}) {
  return (
    <div className="bg-card border-2 border-border rounded-2xl p-6 shadow-hard flex flex-col gap-4">
      <div className="flex items-center justify-between text-muted-foreground">
        <h3 className="font-bold text-sm tracking-wide uppercase">{title}</h3>
        {icon}
      </div>
      <div className="flex items-end justify-between">
        <div className="text-4xl font-display font-bold text-foreground">
          {value}
        </div>
        {trend && (
          <div className={`text-sm font-bold ${trendPositive ? 'text-green-500' : 'text-red-500'}`}>
            {trendPositive ? '+' : '-'}{trend}
          </div>
        )}
      </div>
    </div>
  );
}
