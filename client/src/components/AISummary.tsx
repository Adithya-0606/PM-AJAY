import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface AISummaryProps {
  regionName: string | null;
}

export function AISummary({ regionName }: AISummaryProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!regionName) {
    return (
      <Card className="border-primary/20 bg-accent/30" data-testid="card-ai-summary-empty">
        <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <CardTitle className="text-base">AI Summary</CardTitle>
          </div>
          <Badge variant="outline" className="bg-primary/10">
            AI Powered
          </Badge>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Select a region to view AI-generated insights and GIA summary
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-primary/20 bg-accent/30" data-testid={`card-ai-summary-${regionName}`}>
      <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <CardTitle className="text-base">AI Summary - {regionName}</CardTitle>
        </div>
        <Badge variant="outline" className="bg-primary/10">
          AI Powered
        </Badge>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-sm leading-relaxed" data-testid="text-ai-summary">
          <p className="mb-2">
            <strong>GIA Overview:</strong> {regionName} has been allocated ₹{Math.floor(Math.random() * 1000 + 1500)}Cr under the PM Ajay Internship Scheme with strong utilization metrics showing {Math.floor(Math.random() * 30 + 70)}% fund deployment.
          </p>
          
          <ul className="space-y-1.5 ml-4 list-disc text-muted-foreground">
            <li>Primary focus on skill development in manufacturing and IT sectors</li>
            <li>Coordination between {Math.floor(Math.random() * 5 + 8)} Executing Agencies and {Math.floor(Math.random() * 10 + 15)} Implementing Agencies</li>
            <li>Average internship duration: 6-12 months with stipend compliance at 95%</li>
          </ul>
        </div>

        {isExpanded && (
          <div className="text-sm space-y-2 pt-2 border-t" data-testid="text-ai-details">
            <p className="text-muted-foreground">
              <strong>Key Insights:</strong> Recent monitoring indicates accelerated deployment in Q3 with particular strength in tier-2 cities. Beneficiary feedback scores average 4.2/5 with high satisfaction in training quality and placement support.
            </p>
            <p className="text-muted-foreground">
              <strong>Recommendations:</strong> Consider expanding capacity in high-demand sectors and strengthening EA-IA coordination for underperforming districts.
            </p>
          </div>
        )}

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full"
          data-testid="button-toggle-details"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4 mr-2" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-2" />
              Show Detailed Analysis
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
