import { NavItem } from '../ui/NavItem';
import { FolderIcon, PencilIcon, DocumentIcon } from '../icons/Icons';
import '@momentum-design/fonts/dist/css/fonts.css';
import '@momentum-design/tokens/dist/css/typography/complete.css';
import '@momentum-design/tokens/dist/css/theme/webex/dark-stable.css';
import '@momentum-design/tokens/dist/css/theme/webex/light-stable.css';

import { IconProvider, ThemeProvider } from '@momentum-design/components';


export const LeftNav = () => {
  return (
    <div className="mds-typography">
      
    <nav className="w-16 bg-gray-900 border-r border-gray-800 flex flex-col items-center py-4 space-y-4">
      <NavItem icon={<FolderIcon />}  />
      <NavItem icon={<PencilIcon />} active />
      <NavItem icon={<DocumentIcon />} />
    </nav>
    </div>
  );
};