import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, Bell, User, X } from 'lucide-react';
import { useSearch } from '../../contexts/SearchContext';
import { SearchResults } from '../SearchResults';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { searchQuery, setSearchQuery, clearSearch, searchResults } = useSearch();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && mobileSearchInputRef.current) {
      mobileSearchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSearchClose = () => {
    setIsSearchOpen(false);
    clearSearch();
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white h-14 flex items-center px-4 justify-between z-50">
      <div className="flex items-center gap-4">
        <button 
          className="p-2 hover:bg-gray-100 rounded-full"
          onClick={onMenuClick}
        >
          <Menu className="w-6 h-6" />
        </button>
        <Link to="/" className="flex items-center">
          <img 
            src="https://primepulsemedia.com/wp-content/uploads/2024/12/ArnelCulum.png"
            alt="Arnel Culum"
            className="h-8 w-auto md:h-10"
          />
        </Link>
      </div>

      {/* Desktop Search Bar */}
      <div className="hidden md:flex flex-grow max-w-2xl mx-4">
        <div className="flex w-full">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search videos"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:border-blue-500 focus:outline-none"
          />
          <button className="px-6 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="flex items-center gap-2 md:gap-3">
        {/* Mobile Search Button */}
        <button 
          className="p-2 hover:bg-gray-100 rounded-full md:hidden ml-auto"
          onClick={() => setIsSearchOpen(true)}
        >
          <Search className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full hidden md:block">
          <Bell className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <User className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden flex flex-col">
          <div className="flex items-center p-4 gap-2 border-b">
            <button 
              onClick={handleSearchClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-1 items-center bg-gray-100 rounded-full px-4 py-2">
              <Search className="w-5 h-5 text-gray-500 mr-3" />
              <input
                ref={mobileSearchInputRef}
                type="text"
                placeholder="Search videos"
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full bg-transparent focus:outline-none"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1 hover:bg-gray-200 rounded-full ml-2"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              )}
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            {searchQuery && searchResults.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {searchResults.map((video) => (
                  <div 
                    key={video.id}
                    className="flex items-start gap-3 bg-white rounded-lg p-2 hover:bg-gray-50"
                    onClick={() => {
                      handleSearchClose();
                      window.location.href = `/video/${video.id}`;
                    }}
                  >
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title}
                      className="w-24 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-medium line-clamp-2">{video.title}</h3>
                      <p className="text-sm text-gray-500 line-clamp-1">{video.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {searchQuery && searchResults.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No results found for "{searchQuery}"
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}