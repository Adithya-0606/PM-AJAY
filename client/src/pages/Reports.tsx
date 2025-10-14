import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Calendar, Filter } from "lucide-react";

interface Report {
  id: string;
  title: string;
  type: string;
  date: string;
  status: "completed" | "pending" | "in-review";
  size: string;
}

export default function Reports() {
  const reports: Report[] = [
    {
      id: "1",
      title: "Q3 Fund Utilization Report",
      type: "Financial",
      date: "Oct 10, 2025",
      status: "completed",
      size: "2.4 MB",
    },
    {
      id: "2",
      title: "September Compliance Summary",
      type: "Compliance",
      date: "Oct 5, 2025",
      status: "completed",
      size: "1.8 MB",
    },
    {
      id: "3",
      title: "Regional Project Analysis",
      type: "Analytics",
      date: "Oct 1, 2025",
      status: "in-review",
      size: "3.2 MB",
    },
    {
      id: "4",
      title: "GIA Allocation Report - Maharashtra",
      type: "Regional",
      date: "Sep 28, 2025",
      status: "completed",
      size: "1.5 MB",
    },
    {
      id: "5",
      title: "Annual Performance Dashboard",
      type: "Performance",
      date: "Sep 25, 2025",
      status: "pending",
      size: "4.1 MB",
    },
  ];

  const getStatusColor = (status: Report["status"]) => {
    switch (status) {
      case "completed":
        return "default";
      case "pending":
        return "secondary";
      case "in-review":
        return "outline";
      default:
        return "secondary";
    }
  };

  return (
    <div className="h-full p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold" data-testid="text-page-title">
          Reports
        </h1>
        <p className="text-muted-foreground mt-1">
          Access and download scheme reports, analytics, and compliance documents
        </p>
      </div>

      <div className="flex gap-4 mb-6">
        <Button variant="outline" data-testid="button-filter">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
        <Button variant="outline" data-testid="button-date-range">
          <Calendar className="h-4 w-4 mr-2" />
          Date Range
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {reports.map((report) => (
          <Card key={report.id} className="hover-elevate" data-testid={`card-report-${report.id}`}>
            <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0 pb-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-base mb-1">{report.title}</CardTitle>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{report.type}</span>
                    <span>•</span>
                    <span>{report.date}</span>
                    <span>•</span>
                    <span>{report.size}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant={getStatusColor(report.status)}>
                  {report.status.replace("-", " ")}
                </Badge>
                <Button size="sm" data-testid={`button-download-${report.id}`}>
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </Button>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
