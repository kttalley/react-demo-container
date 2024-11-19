// WhiteboardGrid.jsx (0-59)
import { TabButton } from '../ui/TabButton';
import { WhiteboardCard } from '../ui/WhiteboardCard';

export const WhiteboardGrid = () => {
  return (
    <div className="flex-1 bg-gray-900 p-2 "> {/* Reduced padding */}
  <div className="flex space-x-2 mb-2 justify-between">
    <div className="flex space-x-2 flex-grow-0 shrink-0"> {/* Added shrink-0 */}
      <TabButton active>All boards</TabButton>
      <TabButton>My boards</TabButton>
      <TabButton>Shared with me</TabButton>
    </div>
    <TabButton>Sort by</TabButton>
  </div>

      <div className="flex-1 bg-gray-900 p-2 flex flex-wrap"> {/* Reduced gap size */}
       
         

         <WhiteboardCard 
          title="Notes from important meeting"
          editedTime="Edited a moment ago"
          thumbnail="/placeholder/300/200"
        />

         <WhiteboardCard 
          title="Notes from important meeting"
          editedTime="Edited a moment ago"
          thumbnail="/placeholder/300/200"
        />

         <WhiteboardCard 
          title="Notes from important meeting"
          editedTime="Edited a moment ago"
          thumbnail="/placeholder/300/200"
        />

         <WhiteboardCard 
          title="Notes from important meeting"
          editedTime="Edited a moment ago"
          thumbnail="/placeholder/300/200"
        />
        <WhiteboardCard 
          title="Notes from important meeting"
          editedTime="Edited a moment ago"
          thumbnail="/placeholder/300/200"
        />

         <WhiteboardCard 
          title="Notes from important meeting"
          editedTime="Edited a moment ago"
          thumbnail="/placeholder/300/200"
        />

         <WhiteboardCard 
          title="Notes from important meeting"
          editedTime="Edited a moment ago"
          thumbnail="/placeholder/300/200"
        />

         <WhiteboardCard 
          title="Notes from important meeting"
          editedTime="Edited a moment ago"
          thumbnail="/placeholder/300/200"
        />
        <WhiteboardCard 
          title="Notes from important meeting"
          editedTime="Edited a moment ago"
          thumbnail="/placeholder/300/200"
        />

         
      </div>
    </div>
  );
};