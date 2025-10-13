import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, TrendingUp, DollarSign } from "lucide-react";

interface RegionData {
  id: string;
  name: string;
  allocated: number;
  utilized: number;
  projects: number;
}

interface RegionInfoPanelProps {
  region: RegionData | null;
}

export function RegionInfoPanel({ region }: RegionInfoPanelProps) {
  if (!region) {
    return (
      <Card data-testid="card-region-info-empty">
        <CardHeader>
          <CardTitle>Regional Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Click on a region on the map to view detailed fund allocation and project information
          </p>
        </CardContent>
      </Card>
    );
  }

  const utilizationPercent = (region.utilized / region.allocated) * 100;
  const remaining = region.allocated - region.utilized;

  return (
    <Card data-testid={`card-region-info-${region.id}`}>
      <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0">
        <CardTitle>{region.name}</CardTitle>
        <Badge variant={utilizationPercent > 80 ? "default" : "secondary"}>
          {utilizationPercent.toFixed(1)}% Utilized
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Fund Utilization</span>
            <span className="font-mono font-medium">₹{region.utilized}Cr / ₹{region.allocated}Cr</span>
          </div>
          <Progress value={utilizationPercent} className="h-2" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-muted-foreground">
              <DollarSign className="h-4 w-4" />
              <span className="text-xs">Allocated</span>
            </div>
            <p className="text-lg font-mono font-semibold" data-testid="text-allocated">₹{region.allocated}Cr</p>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-muted-foreground">
              <TrendingUp className="h-4 w-4" />
              <span className="text-xs">Utilized</span>
            </div>
            <p className="text-lg font-mono font-semibold" data-testid="text-utilized">₹{region.utilized}Cr</p>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Building2 className="h-4 w-4" />
              <span className="text-xs">Active Projects</span>
            </div>
            <p className="text-lg font-mono font-semibold" data-testid="text-projects">{region.projects}</p>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-4 w-4" />
              <span className="text-xs">Remaining</span>
            </div>
            <p className="text-lg font-mono font-semibold" data-testid="text-remaining">₹{remaining}Cr</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
