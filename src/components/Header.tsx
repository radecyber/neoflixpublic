import React, { useState } from 'react';
import { Search, User, LogOut, Home, Film, Tv, X } from 'lucide-react';

interface HeaderProps {
  currentUser: string | null;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onAuthClick: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({
  currentUser,
  searchQuery,
  onSearchChange,
  onAuthClick,
  onLogout,
}) => {
  const [showSearchMenu, setShowSearchMenu] = useState(false);

  return (
    <>
      {/* Brand Logo - Floating Glass */}
      <div className="fixed top-6 left-6 z-50">
        <div className="bg-black/20 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 shadow-2xl">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
            NeoFlix
          </h1>
        </div>
      </div>

      {/* Main Navigation - Floating Glass Center */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/20 backdrop-blur-xl border border-white/20 rounded-full px-4 py-4 shadow-2xl">
          <div className="flex items-center space-x-2">
            {/* Home - Active */}
            <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500/80 to-cyan-500/80 backdrop-blur-sm text-white rounded-full transition-all duration-300 shadow-lg border border-white/10">
              <Home className="w-4 h-4" />
              <span className="text-sm font-medium">Home</span>
            </button>
            
            {/* Movies */}
            <button className="p-3 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300">
              <Film className="w-5 h-5" />
            </button>
            
            {/* Series */}
            <button className="p-3 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300">
              <Tv className="w-5 h-5" />
            </button>
            
            {/* Search Menu Button */}
            <button 
              onClick={() => setShowSearchMenu(!showSearchMenu)}
              className={`p-3 rounded-full transition-all duration-300 ${
                showSearchMenu 
                  ? 'text-white bg-gradient-to-r from-blue-500/80 to-cyan-500/80 border border-white/10' 
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              <Search className="w-5 h-5" />
            </button>
            
            {/* Watchlist */}
            <button className="p-3 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Search Menu Dropdown - Floating Glass */}
      {showSearchMenu && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-40">
          <div className="bg-black/20 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl w-[500px]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold text-lg">Search Content</h3>
              <button
                onClick={() => setShowSearchMenu(false)}
                className="p-1 text-white/60 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search movies, series..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 text-lg"
                autoFocus
              />
            </div>
            {searchQuery && (
              <div className="mt-4 text-base text-gray-300">
                Searching for: <span className="text-blue-400 font-medium">"{searchQuery}"</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* User Profile - Floating Glass Right */}
      <div className="fixed top-6 right-6 z-50">
        <div className="bg-black/20 backdrop-blur-xl border border-white/20 rounded-full p-3 shadow-2xl">
          {currentUser ? (
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">
                <User className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-white truncate max-w-24">
                  {currentUser.split('@')[0]}
                </span>
              </div>
              <button
                onClick={onLogout}
                className="p-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 hover:text-red-300 rounded-full transition-all duration-200 border border-red-500/20"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={onAuthClick}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/80 to-cyan-500/80 backdrop-blur-sm text-white rounded-full transition-all duration-300 shadow-lg border border-white/10"
            >
              <User className="w-4 h-4" />
              <span className="text-sm font-medium">Sign In</span>
            </button>
          )}
        </div>
      </div>

      {/* Backdrop for search menu */}
      {showSearchMenu && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={() => setShowSearchMenu(false)}
        />
      )}
    </>
  );
};

export default Header;