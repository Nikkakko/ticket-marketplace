"use client";

import events from "../../convex/sampleData.json";
import { EventCard } from "./EventCard";
import { motion } from "framer-motion";

export function EventList() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <EventCard event={event} />
        </motion.div>
      ))}
    </motion.div>
  );
}
