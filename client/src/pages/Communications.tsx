import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, Plus, Search, Send } from "lucide-react";
import { useState } from "react";

interface Message {
  id: string;
  sender: string;
  senderType: "EA" | "IA";
  message: string;
  timestamp: string;
  unread?: boolean;
}

export default function Communications() {
  const [searchQuery, setSearchQuery] = useState("");
  const [newMessage, setNewMessage] = useState("");

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
    {
      id: "4",
      sender: "Rajasthan IA",
      senderType: "IA",
      message: "Monthly compliance report for September submitted",
      timestamp: "2 days ago",
    },
  ];

  return (
    <div className="h-full p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold" data-testid="text-page-title">
          Communications
        </h1>
        <p className="text-muted-foreground mt-1">
          Manage communications between Executing Agencies and Implementing Agencies
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100%-100px)]">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Conversations
            </CardTitle>
            <div className="relative mt-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search messages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
                data-testid="input-search-messages"
              />
            </div>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[500px]">
              <div className="space-y-2">
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

        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0">
            <CardTitle className="text-base">Message Thread</CardTitle>
            <Button size="sm" data-testid="button-new-message">
              <Plus className="h-4 w-4 mr-1" />
              New Message
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <ScrollArea className="h-[400px] border rounded-md p-4">
              <div className="space-y-4">
                <div className="text-sm text-center text-muted-foreground py-2">
                  Select a conversation to view messages
                </div>
              </div>
            </ScrollArea>

            <div className="flex gap-2">
              <Textarea
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="resize-none"
                rows={3}
                data-testid="input-new-message"
              />
              <Button size="icon" data-testid="button-send-message">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
