import { useEffect, useRef, useState } from "react";
import { MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface RegionData {
  id: string;
  name: string;
  allocated: number;
  utilized: number;
  projects: number;
}

interface GISMapProps {
  onRegionClick: (region: RegionData) => void;
}

export function GISMap({ onRegionClick }: GISMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  // Mock regions data
  const regions: RegionData[] = [
    { id: "UP", name: "Uttar Pradesh", allocated: 2500, utilized: 1850, projects: 45 },
    { id: "MH", name: "Maharashtra", allocated: 2200, utilized: 1980, projects: 38 },
    { id: "RJ", name: "Rajasthan", allocated: 1800, utilized: 1400, projects: 32 },
    { id: "MP", name: "Madhya Pradesh", allocated: 1500, utilized: 1200, projects: 28 },
    { id: "GJ", name: "Gujarat", allocated: 1600, utilized: 1450, projects: 30 },
  ];

  useEffect(() => {
    if (!mapRef.current || typeof window === 'undefined' || !(window as any).L) return;

    const L = (window as any).L;
    const map = L.map(mapRef.current).setView([20.5937, 78.9629], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Mock markers for Indian states
    const stateCoordinates: Record<string, [number, number]> = {
      UP: [26.8467, 80.9462],
      MH: [19.7515, 75.7139],
      RJ: [27.0238, 74.2179],
      MP: [22.9734, 78.6569],
      GJ: [22.2587, 71.1924],
    };

    regions.forEach((region) => {
      const coords = stateCoordinates[region.id];
      if (coords) {
        const utilization = (region.utilized / region.allocated) * 100;
        const color = utilization > 80 ? '#10b981' : utilization > 50 ? '#f59e0b' : '#ef4444';
        
        const marker = L.circleMarker(coords, {
          radius: 12,
          fillColor: color,
          color: '#fff',
          weight: 2,
          opacity: 1,
          fillOpacity: 0.7
        }).addTo(map);

        marker.bindPopup(`
          <div style="font-family: Inter, sans-serif;">
            <strong>${region.name}</strong><br/>
            Allocated: ₹${region.allocated}Cr<br/>
            Utilized: ₹${region.utilized}Cr<br/>
            Projects: ${region.projects}
          </div>
        `);

        marker.on('click', () => {
          setSelectedRegion(region.id);
          onRegionClick(region);
        });
      }
    });

    return () => {
      map.remove();
    };
  }, [onRegionClick]);

  return (
    <div className="relative h-full w-full">
      <div className="absolute top-4 left-4 z-[1000] w-72">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search region or state..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-background"
            data-testid="input-region-search"
          />
        </div>
      </div>
      
      <div className="absolute top-4 right-4 z-[1000]">
        <div className="bg-card border border-card-border rounded-md p-3 shadow-md">
          <p className="text-xs font-medium mb-2">Fund Utilization</p>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-chart-2" />
              <span className="text-xs text-muted-foreground">&gt;80% Utilized</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-chart-3" />
              <span className="text-xs text-muted-foreground">50-80% Utilized</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <span className="text-xs text-muted-foreground">&lt;50% Utilized</span>
            </div>
          </div>
        </div>
      </div>

      {selectedRegion && (
        <Badge className="absolute bottom-4 left-4 z-[1000]" variant="secondary">
          <MapPin className="h-3 w-3 mr-1" />
          {regions.find(r => r.id === selectedRegion)?.name} Selected
        </Badge>
      )}

      <div ref={mapRef} className="h-full w-full rounded-md" data-testid="map-container" />
    </div>
  );
}
