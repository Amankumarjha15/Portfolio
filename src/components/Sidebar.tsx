import { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { HiMenu } from 'react-icons/hi';

interface SidebarProps {
  items: {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
    isActive: boolean; // Changed from 'active' to 'isActive' to match the props in App.tsx
  }[];
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ items, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      if (isOpen && !target.closest('.sidebar') && !target.closest('.sidebar-toggle')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Prevent body scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  // Helper function to check if an item is active based on section
  const isItemActive = (item: { label: string }) => {
    const sectionMap: Record<string, string> = {
      'Home': 'home',
      'About': 'profile',
      'Skills': 'skills',
      'Experience': 'experience',
      'Services': 'services'
    };
    
    return sectionMap[item.label] === activeSection;
  };
  
  // Split items into navigation and social/theme items
  const navigationItems = items.filter(item => 
    !['GitHub', 'LinkedIn', 'Theme'].includes(item.label)
  );
  
  const connectItems = items.filter(item => 
    ['GitHub', 'LinkedIn'].includes(item.label)
  );
  
  const themeItem = items.find(item => item.label === 'Theme');

  return (
    <>
      {/* Hamburger menu button - only visible on small screens */}
      <button 
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-black/80 text-white md:hidden sidebar-toggle"
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        {isOpen ? <IoClose size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Sidebar - shown when toggled on small screens */}
      <div 
        className={`fixed top-0 left-0 h-full dark:bg-black not-dark:bg-white w-[280px] z-40 shadow-lg transform transition-transform duration-300 ease-in-out sidebar ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full px-4 py-5">
          {/* Header with profile info */}
          <div className="flex items-center gap-3 pb-4 mb-4 border-b border-gray-800">
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
              <span className="dark:text-white not-dark:text-black text-sm">AK</span>
            </div>
            <div>
              <h3 className="font-medium dark:text-white not-dark:text-black">Anmol Kumar</h3>
              <p className="text-xs text-gray-400">Software Developer</p>
            </div>
            <button 
              onClick={toggleSidebar}
              className="ml-auto text-gray-500 hover:text-gray-300"
              aria-label="Close menu"
            >
              <IoClose size={20} />
            </button>
          </div>

          {/* Navigation items */}
          <div className="flex-1">
            <nav>
              <ul className="space-y-1">
                {navigationItems.map((item, index) => {
                  const active = isItemActive(item);
                  return (
                    <li key={index}>
                      <button
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors ${
                          active 
                            ? 'dark:bg-gray-800 not-dark:bg-[#dededc] text-white font-medium' 
                            : 'hover:bg-gray-800/60 dark:text-gray-300 not-dark:text-black'
                        }`}
                        onClick={() => {
                          item.onClick();
                          setIsOpen(false);
                        }}
                      >
                        <span className={`text-lg ${active ? 'text-gray-400' : ''}`}>
                          {item.icon}
                        </span>
                        <span>{item.label}</span>
                        {active && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Connect section */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-sm text-gray-500 mb-3">Connect</p>
            <div className="flex gap-3">
              {connectItems.map((item, index) => (
                <button
                  key={index}
                  className="p-2.5 rounded-md bg-gray-800 text-gray-300 hover:text-white"
                  onClick={item.onClick}
                  aria-label={item.label}
                >
                  {item.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Theme toggle at bottom */}
          {themeItem && (
            <div className="mt-4 pt-4 border-t border-gray-800">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">Theme</p>
                <button
                  onClick={themeItem.onClick}
                  className="p-1 rounded-full"
                  aria-label="Toggle theme"
                >
                  {themeItem.icon}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
