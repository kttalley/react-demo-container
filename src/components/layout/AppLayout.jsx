import React from 'react';
import { Header } from './Header';
import { LeftNav } from './LeftNav';
import { WhiteboardGrid } from './WhiteboardGrid';

export const AppLayout = () => {
  return (
    <div className="h-screen w-full bg-gray-900 flex flex-col height-[720px]">
      {/* Global Header */}
      <Header />
      
      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Navigation */}
        <LeftNav />
        
        {/* Whiteboard Grid Area */}
        <WhiteboardGrid />
      </div>
    </div>
  );
};