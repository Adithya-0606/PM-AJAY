import { useState } from "react";
import { StatCard } from "@/components/StatCard";
import { GISMap } from "@/components/GISMap";
import { RegionInfoPanel } from "@/components/RegionInfoPanel";
import { AISummary } from "@/components/AISummary";
import { MessageThread } from "@/components/MessageThread";
import { DollarSign, Building2, Users, TrendingUp } from "lucide-react";

interface RegionData {
  id: string;
  name: string;
  allocated: number;
  utilized: number;
  projects: number;
}

export default function Dashboard() {
  const [selectedRegion, setSelectedRegion] = useState<RegionData | null>(null);

  return (
    <div className="flex flex-col h-full">
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-semibold" data-testid="text-page-title">
            PM Ajay Internship Scheme Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Monitor fund allocation, track projects, and manage agency communications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Total Funds Allocated"
            value="₹9,600Cr"
            icon={DollarSign}
            trend="+12% from last quarter"
            trendUp={true}
          />
          <StatCard
            title="Active Projects"
            value="173"
            icon={Building2}
            trend="+8 new this month"
            trendUp={true}
          />
          <StatCard
            title="Executing Agencies"
            value="42"
            icon={Users}
          />
          <StatCard
            title="Fund Utilization"
            value="74.3%"
            icon={TrendingUp}
            trend="+5.2% this quarter"
            trendUp={true}
          />
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 pb-6 min-h-0">
        <div className="lg:col-span-2 h-[600px] lg:h-auto">
          <GISMap onRegionClick={setSelectedRegion} />
        </div>

        <div className="space-y-4 overflow-auto">
          <AISummary regionName={selectedRegion?.name || null} />
          <RegionInfoPanel region={selectedRegion} />
          <MessageThread />
        </div>
      </div>
    </div>
  );
}
