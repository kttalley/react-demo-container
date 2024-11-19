import { SearchIcon, PlusIcon } from '../icons/Icons';

export const Header = () => {
  return (
    <header className="h-14 bg-gray-900 border-b border-gray-800 flex items-center px-4">
      <div className="text-white text-xl">Whiteboards</div>
      <div className="ml-auto flex items-center space-x-4">
        <button className="p-2 text-gray-400 hover:text-white">
          <SearchIcon />
        </button>
        <button className="p-2 text-gray-400 hover:text-white">
          <PlusIcon />
        </button>
      </div>
    </header>
  );
};