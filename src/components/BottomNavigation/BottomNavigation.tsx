'use client';
import React from 'react';
import Link from 'next/link';

export const BottomNav: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex justify-around">
      <Link href="/home">
        <div className="flex flex-col items-center">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
          </svg>
          <span>Home</span>
        </div>
      </Link>
      <Link href="/search">
        <div className="flex flex-col items-center">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
          </svg>
          <span>Search</span>
        </div>
      </Link>
      <Link href="/profile">
        <div className="flex flex-col items-center">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
          </svg>
          <span>Profile</span>
        </div>
      </Link>
    </div>
  );
};

export default BottomNav;