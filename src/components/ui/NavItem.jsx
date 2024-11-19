export const NavItem = ({ icon, active }) => {
  return (
    <button 
      className={`w-10 h-10 rounded-full flex items-center justify-center
        ${active ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white'}`}
    >
      {icon}
    </button>
  );
};