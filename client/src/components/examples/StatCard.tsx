import { StatCard } from '../StatCard';
import { DollarSign } from 'lucide-react';

export default function StatCardExample() {
  return (
    <div className="p-4 grid grid-cols-2 gap-4">
      <StatCard
        title="Total Funds Allocated"
        value="₹9,600Cr"
        icon={DollarSign}
        trend="+12% from last quarter"
        trendUp={true}
      />
      <StatCard
        title="Fund Utilization"
        value="74.3%"
        icon={DollarSign}
      />
    </div>
  );
}
