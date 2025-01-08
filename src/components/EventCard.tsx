import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { CalendarIcon, MapPinIcon } from "lucide-react";

interface EventCardProps {
  event: {
    _id: string;
    name: string;
    price: number;
    eventDate: number;
    location: string;
    totalTickets: number;
  };
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-[16/9] relative bg-blue-100">
        {/* Event image would go here */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <CardHeader className="space-y-1">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-xl line-clamp-1">{event.name}</h3>
          <span className="text-blue-600 font-semibold">${event.price}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>{formatDate(event.eventDate)}</span>
          </div>
          <div className="flex items-center">
            <MapPinIcon className="mr-2 h-4 w-4" />
            <span>{event.location}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/events/${event.eventDate}`} className="w-full">
          <Button className="w-full" variant="outline">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
