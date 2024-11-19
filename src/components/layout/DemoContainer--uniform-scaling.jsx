import React from 'react';

const DemoContainer = ({ children }) => {
  const [scale, setScale] = React.useState(1);
  const containerRef = React.useRef(null);
  
  // Original dimensions that we want to maintain the aspect ratio for
  const ORIGINAL_WIDTH = 1540;
  const ORIGINAL_HEIGHT = 800;
  
  React.useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      
      const parent = containerRef.current.parentElement;
      if (!parent) return;
      
      // Get available width/height (accounting for padding)
      const availableWidth = parent.clientWidth - 32; // 2rem (32px) padding
      const availableHeight = parent.clientHeight - 32;
      
      // Calculate scale based on available space
      const widthScale = availableWidth / ORIGINAL_WIDTH;
      const heightScale = availableHeight / ORIGINAL_HEIGHT;
      
      // Use the smaller scale to ensure it fits both dimensions
      const newScale = Math.min(widthScale, heightScale, 1);
      
      setScale(newScale);
    };
    
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);
  
  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <div
        ref={containerRef}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          width: ORIGINAL_WIDTH,
          height: ORIGINAL_HEIGHT,
        }}
        className="bg-slate-100 flex items-center justify-center bg-grid-slate-200 rounded-lg"
      >
        {/* Demo window container with shadow */}
        <div className="w-full h-full bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col">
          {/* Demo browser chrome */}
          <div className="h-80 bg-gray-100 border-b border-gray-200 flex items-center px-4 space-x-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 flex justify-center">
              {/* <div className="px-3 py-1 text-sm bg-white rounded text-gray-500 border border-gray-200 max-w-sm truncate">
                demo.whiteboards.example
              </div> */}
            </div>
          </div>
          {/* App content */}
          {children}
        </div>
      </div>
    </div>
  );
};

// Modified App wrapper to provide proper scaling context
const App = () => {
  return (
    <div className="w-full h-screen bg-slate-100 overflow-hidden" style={gridBgStyle}>
      <DemoContainer>
        <AppLayout />
      </DemoContainer>
    </div>
  );
};

export default DemoContainer;