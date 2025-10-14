import { useState } from "react";
import { GISMap } from "@/components/GISMap";
import { RegionInfoPanel } from "@/components/RegionInfoPanel";
import { AISummary } from "@/components/AISummary";

interface RegionData {
  id: string;
  name: string;
  allocated: number;
  utilized: number;
  projects: number;
}

export default function GISMapping() {
  const [selectedRegion, setSelectedRegion] = useState<RegionData | null>(null);

  return (
    <div className="flex flex-col h-full">
      <div className="p-6">
        <h1 className="text-3xl font-semibold" data-testid="text-page-title">
          GIS Mapping
        </h1>
        <p className="text-muted-foreground mt-1">
          Interactive map showing regional fund allocation and project distribution
        </p>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 pb-6 min-h-0">
        <div className="lg:col-span-2 h-[600px] lg:h-auto">
          <GISMap onRegionClick={setSelectedRegion} />
        </div>

        <div className="space-y-4 overflow-auto">
          <AISummary regionName={selectedRegion?.name || null} />
          <RegionInfoPanel region={selectedRegion} />
        </div>
      </div>
    </div>
  );
}
