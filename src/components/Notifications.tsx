import { useState } from "react";
import { Card } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Notice {
  id: number;
  title: string;
  content: string;
  date: string;
}

const notices: Notice[] = [
  {
    id: 1,
    title: "Campus Expansion Project",
    content: "New state-of-the-art facilities being added to accommodate growing student body.",
    date: "2024-02-20"
  },
  {
    id: 2,
    title: "Academic Excellence Awards",
    content: "Annual Academic Excellence Awards ceremony to be held next month.",
    date: "2024-02-18"
  },
  {
    id: 3,
    title: "Parent-Teacher Meeting",
    content: "Quarterly parent-teacher meeting scheduled for next week.",
    date: "2024-02-16"
  }
];

const Notifications = () => {
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  return (
    <div className="h-[300px] overflow-hidden relative">
      <div className="absolute inset-0">
        <div className="animate-marquee space-y-4 transform translate-y-full">
          {notices.map((notice) => (
            <Card 
              key={notice.id}
              className="p-4 cursor-pointer hover:bg-blue-50 transition-colors mx-4"
              onClick={() => setSelectedNotice(notice)}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-primary">{notice.title}</span>
                <span className="text-sm text-gray-500">{notice.date}</span>
              </div>
            </Card>
          ))}
          {/* Duplicate notices for seamless loop */}
          {notices.map((notice) => (
            <Card 
              key={`duplicate-${notice.id}`}
              className="p-4 cursor-pointer hover:bg-blue-50 transition-colors mx-4"
              onClick={() => setSelectedNotice(notice)}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-primary">{notice.title}</span>
                <span className="text-sm text-gray-500">{notice.date}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedNotice} onOpenChange={() => setSelectedNotice(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedNotice?.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-gray-600">{selectedNotice?.content}</p>
            <p className="text-sm text-gray-500 mt-2">Posted on: {selectedNotice?.date}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Notifications;