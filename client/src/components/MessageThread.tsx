import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Plus } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Message {
  id: string;
  sender: string;
  senderType: "EA" | "IA";
  message: string;
  timestamp: string;
  unread?: boolean;
}

export function MessageThread() {
  // Mock messages
  const messages: Message[] = [
    {
      id: "1",
      sender: "Maharashtra EA",
      senderType: "EA",
      message: "Updated Q3 utilization report submitted for review",
      timestamp: "2 hours ago",
      unread: true,
    },
    {
      id: "2",
      sender: "Gujarat IA",
      senderType: "IA",
      message: "Request for additional internship slots in Ahmedabad region",
      timestamp: "5 hours ago",
      unread: true,
    },
    {
      id: "3",
      sender: "UP EA",
      senderType: "EA",
      message: "Fund disbursement approved for 15 new projects",
      timestamp: "Yesterday",
    },
  ];

  return (
    <Card data-testid="card-message-thread">
      <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0">
        <CardTitle className="text-base flex items-center gap-2">
          <MessageSquare className="h-4 w-4" />
          Recent Communications
        </CardTitle>
        <Button size="sm" data-testid="button-new-message">
          <Plus className="h-4 w-4 mr-1" />
          New
        </Button>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          <div className="space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="p-3 rounded-md border border-card-border hover-elevate cursor-pointer"
                data-testid={`message-${msg.id}`}
              >
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                      {msg.senderType}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-medium truncate">{msg.sender}</p>
                      {msg.unread && (
                        <Badge variant="default" className="h-5 text-xs">New</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{msg.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{msg.timestamp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
