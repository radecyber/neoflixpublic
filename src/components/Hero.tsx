import React from 'react';
import { Play, Info } from 'lucide-react';
import { MockContent } from '../data/mockContent';

interface HeroProps {
  featuredContent: MockContent;
  onPlay: (content: MockContent) => void;
  isLoggedIn: boolean;
}

const Hero: React.FC<HeroProps> = ({ featuredContent, onPlay, isLoggedIn }) => {
  return (
    <div className="relative pt-16 pb-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2)), url(${featuredContent.thumbnail})`,
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
            {featuredContent.title}
          </h1>
          <p className="text-lg text-gray-200 mb-6 leading-relaxed">
            {featuredContent.description}
          </p>
          <div className="flex items-center space-x-2 mb-8 text-sm text-gray-300">
            <span className="px-2 py-1 bg-gray-700 rounded text-xs font-medium">
              {featuredContent.rating}
            </span>
            <span>{featuredContent.year}</span>
            <span>•</span>
            <span>{featuredContent.duration}</span>
            <span>•</span>
            <span>{featuredContent.genre.join(', ')}</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onPlay(featuredContent)}
              className="flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 rounded-lg transition-all duration-200 font-semibold shadow-lg"
            >
              <Play className="w-5 h-5" />
              <span>Play</span>
            </button>
            <button className="flex items-center space-x-2 px-8 py-3 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 rounded-lg transition-all duration-200 border border-white/30">
              <Info className="w-5 h-5" />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;