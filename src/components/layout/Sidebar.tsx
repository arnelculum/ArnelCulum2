import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Briefcase, Mail, Phone, FileText, DollarSign, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  
  const menuItems = [
    { icon: Home, label: 'Home', to: '/' },
    { icon: Briefcase, label: 'Projects', to: '/projects' },
    { icon: DollarSign, label: 'Services', to: '/services' },
    { icon: FileText, label: 'Resume', to: 'https://example.com/your-resume.pdf', external: true },
    { icon: Mail, label: 'Contact', to: '/contact' },
    { icon: Phone, label: 'Call', to: 'tel:208-316-7015' },
  ];

  const handleNavigation = (item: typeof menuItems[0]) => {
    if (item.external || item.to.startsWith('tel:')) {
      window.open(item.to, item.external ? '_blank' : undefined);
    } else {
      navigate(item.to);
      onClose();
    }
  };

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={onClose} />
      )}

      {/* Desktop Sidebar */}
      <aside className={`fixed left-0 top-14 w-64 h-[calc(100vh-3.5rem)] bg-white overflow-y-auto transition-transform duration-300 z-40 
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="flex justify-between items-center p-4 md:hidden">
          <h2 className="font-semibold">Menu</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="p-2 pt-3">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.to;
            const linkClass = `flex items-center gap-4 p-3 rounded-lg ${
              isActive ? 'bg-gray-100' : 'hover:bg-gray-100'
            }`;
            
            return (
              <button
                key={item.label}
                onClick={() => handleNavigation(item)}
                className={linkClass}
              >
                <item.icon className="w-6 h-6" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
        <div className="flex justify-around py-2">
          {menuItems.slice(0, 4).map((item) => {
            const isActive = location.pathname === item.to;
            const linkClass = `flex flex-col items-center p-2 ${
              isActive ? 'text-blue-600' : 'text-gray-600'
            }`;

            return (
              <button
                key={item.label}
                onClick={() => handleNavigation(item)}
                className={linkClass}
              >
                <item.icon className="w-6 h-6" />
                <span className="text-xs mt-1">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}