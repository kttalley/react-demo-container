import React from 'react';

// Demo Container wrapper for the app
const DemoContainer = ({ children }) => {
  return (
    // Background pattern container
   <div className="h-[720px] w-80vw bg-slate-100 p-12 mx-auto my-12 flex items-center justify-center bg-grid-slate-200">
      {/* Demo window container with shadow */}
      <div className="w-full h-full bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col">
        {/* Demo browser chrome */}
        <div className="h-9 bg-gray-100 border-b border-gray-200 flex items-center px-4 space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-3 py-1 text-sm bg-white rounded text-gray-500 border border-gray-200 max-w-sm truncate">
              demo.whiteboards.example
            </div>
          </div>
        </div>
        {/* App content */}
        {children}
      </div>
    </div>
  );
};

export default DemoContainer;