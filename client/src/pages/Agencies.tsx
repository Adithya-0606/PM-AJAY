import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Building2, Users } from "lucide-react";
import { useState } from "react";

interface Agency {
  id: string;
  name: string;
  type: "EA" | "IA";
  region: string;
  projects: number;
  allocated: number;
  contact: string;
  status: "active" | "inactive";
}

export default function Agencies() {
  const [searchQuery, setSearchQuery] = useState("");

  const agencies: Agency[] = [
    {
      id: "1",
      name: "Maharashtra Executing Agency",
      type: "EA",
      region: "Maharashtra",
      projects: 38,
      allocated: 2200,
      contact: "contact@mh-ea.gov.in",
      status: "active",
    },
    {
      id: "2",
      name: "Gujarat Implementation Agency",
      type: "IA",
      region: "Gujarat",
      projects: 30,
      allocated: 1600,
      contact: "info@gj-ia.gov.in",
      status: "active",
    },
    {
      id: "3",
      name: "Uttar Pradesh Executing Agency",
      type: "EA",
      region: "Uttar Pradesh",
      projects: 45,
      allocated: 2500,
      contact: "admin@up-ea.gov.in",
      status: "active",
    },
    {
      id: "4",
      name: "Rajasthan Implementation Agency",
      type: "IA",
      region: "Rajasthan",
      projects: 32,
      allocated: 1800,
      contact: "support@rj-ia.gov.in",
      status: "active",
    },
    {
      id: "5",
      name: "Madhya Pradesh Executing Agency",
      type: "EA",
      region: "Madhya Pradesh",
      projects: 28,
      allocated: 1500,
      contact: "contact@mp-ea.gov.in",
      status: "inactive",
    },
  ];

  return (
    <div className="h-full p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold" data-testid="text-page-title">
          Agencies
        </h1>
        <p className="text-muted-foreground mt-1">
          Manage Executing Agencies (EA) and Implementing Agencies (IA)
        </p>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search agencies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
            data-testid="input-search-agencies"
          />
        </div>
        <Button data-testid="button-add-agency">
          <Plus className="h-4 w-4 mr-2" />
          Add Agency
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {agencies.map((agency) => (
          <Card key={agency.id} className="hover-elevate" data-testid={`card-agency-${agency.id}`}>
            <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0">
              <div className="flex items-start gap-4 flex-1">
                <div className={`h-12 w-12 rounded-md flex items-center justify-center ${
                  agency.type === "EA" ? "bg-primary text-primary-foreground" : "bg-chart-2 text-white"
                }`}>
                  {agency.type === "EA" ? (
                    <Building2 className="h-6 w-6" />
                  ) : (
                    <Users className="h-6 w-6" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <CardTitle className="text-base">{agency.name}</CardTitle>
                    <Badge variant={agency.type === "EA" ? "default" : "secondary"}>
                      {agency.type}
                    </Badge>
                    <Badge variant={agency.status === "active" ? "default" : "outline"}>
                      {agency.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3 text-sm">
                    <div>
                      <p className="text-muted-foreground">Region</p>
                      <p className="font-medium">{agency.region}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Projects</p>
                      <p className="font-medium font-mono">{agency.projects}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Allocated</p>
                      <p className="font-medium font-mono">₹{agency.allocated}Cr</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Contact</p>
                      <p className="font-medium">{agency.contact}</p>
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm" data-testid={`button-view-${agency.id}`}>
                View Details
              </Button>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
