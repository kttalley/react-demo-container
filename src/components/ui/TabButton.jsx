export const TabButton = ({ children, active }) => {
  return (
    <button 
      className={`px-4 py-2 rounded-full text-sm
        ${active ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white'}`}
    >
      {children}
    </button>
  );
};