"use client";
import WorldMap from "@/components/ui/WorldMap";
import { motion } from "motion/react";

export default function WorldMapComponent() {
  return (
    <div className=" py-40 dark:bg-black bg-white w-full rounded-xl">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-2xl md:text-4xl dark:text-white text-black">
          Dev{" "}
          <span className="text-neutral-400">
            {"Ops".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block text-primary"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <h1 className="text-4xl font-semibold text-black dark:text-white mb-8 text-center p-2 mt-16">
          My experience with CDNs such as AWS Cloudfront and Cloudflare can help
          get your software up and running globally with low latency and high
          availability.
        </h1>
      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      />
    </div>
  );
}
