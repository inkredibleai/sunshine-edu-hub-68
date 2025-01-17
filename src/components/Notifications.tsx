import { useState } from "react";
import { Card } from "./ui/card";
import { Bell } from "lucide-react";
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
    title: "Admissions Open for 2024-25",
    content: "Applications are now being accepted for the academic year 2024-25. Early bird discounts available until March 31st.",
    date: "2024-02-15"
  },
  {
    id: 2,
    title: "New IIT-JEE Batch Starting",
    content: "New batch for IIT-JEE preparation starting from April 1st. Limited seats available.",
    date: "2024-02-14"
  },
  {
    id: 3,
    title: "Annual Sports Meet",
    content: "Annual Sports Meet will be held from March 10th to March 15th. All students are encouraged to participate.",
    date: "2024-02-13"
  }
];

const Notifications = () => {
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-4">
          <Bell className="h-5 w-5 text-blue-600" />
          <h2 className="text-xl font-heading font-semibold">Latest Updates</h2>
        </div>
        
        <div className="overflow-hidden h-20">
          <div className="animate-marquee">
            {notices.map((notice) => (
              <Card 
                key={notice.id}
                className="p-3 mb-2 cursor-pointer hover:bg-blue-50 transition-colors"
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
    </div>
  );
};

export default Notifications;