'use client';

import React from "react";
import Navigation from "@/components/BottomNavigation/BottomNavigation";


export default function Nav() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-end">
     <h2>merhaba </h2>
      <div className="mb-6">
        <Navigation />
      </div>
    </div>
  );
};

