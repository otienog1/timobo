import React from "react";
import Link from "next/link";
import { Destination } from "@/lib/content";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DestinationCardProps {
  destination: Destination;
  region: "eastern" | "southern";
}

export default function DestinationCard({ destination, region }: DestinationCardProps) {
  const slug = destination.name.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, 'and');
  
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 bg-stone-50">
        {/* Placeholder for destination image */}
        <div className="absolute inset-0 flex items-center justify-center text-stone-600 bg-gradient-to-br from-amber-500 to-stone-50">
          <span className="text-white font-semibold text-lg">{destination.name}</span>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {region === "eastern" ? "Eastern Africa" : "Southern Africa"}
          </span>
        </div>
      </div>
      
      <CardHeader>
        <h3 className="text-2xl font-bold text-stone-800">
          {destination.name}
        </h3>
        
        <p className="text-amber-600 font-medium">
          {destination.tagline}
        </p>
      </CardHeader>
      
      <CardContent>
        <p className="text-stone-700 mb-4 line-clamp-3">
          {destination.description.substring(0, 150)}...
        </p>
        
        {destination.attractions.length > 0 && (
          <div>
            <h4 className="font-semibold text-stone-800 mb-2">Top Attractions:</h4>
            <div className="flex flex-wrap gap-2">
              {destination.attractions.slice(0, 2).map((attraction, index) => (
                <span key={index} className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                  {attraction.length > 30 ? attraction.substring(0, 30) + '...' : attraction}
                </span>
              ))}
              {destination.attractions.length > 2 && (
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                  +{destination.attractions.length - 2} more
                </span>
              )}
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between items-center">
        <Button asChild variant="default">
          <Link href={`/destinations/${slug}`}>
            Explore {destination.name}
          </Link>
        </Button>
        
        {destination.itinerary && (
          <span className="text-stone-600 text-sm">
            {destination.itinerary.days.length} Day Itinerary
          </span>
        )}
      </CardFooter>
    </Card>
  );
}