// WhiteboardCard.jsx (0-16)
export const WhiteboardCard = ({ title, editedTime, thumbnail }) => {
  return (
    <div className=" hover:bg-gray-700 ml-6 mb-4 rounded-lg overflow-hidden w-106 h-84"> {/* Added width and height */}
      <div className="aspect-video bg-gray-700 h-44 w-106"> {/* Reduced height */}
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-1"> {/* Reduced padding */}
        <h3 className="text-white font-medium text-xs">{title}</h3> {/* Reduced font size */}
        <p className="text-gray-400 text-2xs">{editedTime}</p> {/* Reduced font size */}
      </div>
    </div>
  );
};
