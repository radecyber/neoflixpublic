import React from 'react';
import { Play, Star, Clock } from 'lucide-react';

interface Content {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  rating: number;
  category: string;
}

interface ContentGridProps {
  content: Content[];
  onPlay: (content: Content) => void;
  searchQuery: string;
}

export default function ContentGrid({ content, onPlay, searchQuery }: ContentGridProps) {
  const filteredContent = content.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredContent.length === 0 && searchQuery) {
    return (
      <div className="text-center py-12">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-md mx-auto">
          <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
          <p className="text-gray-300">Try searching with different keywords</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredContent.map((item) => (
        <div
          key={item.id}
          className="group relative bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-105"
        >
          <div className="relative aspect-video">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Play Button */}
            <button
              onClick={() => onPlay(item)}
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
                <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
              </div>
            </button>

            {/* Duration */}
            <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3 text-white" />
                <span className="text-xs text-white font-medium">{item.duration}</span>
              </div>
            </div>

            {/* Rating */}
            <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3 text-yellow-400" fill="currentColor" />
                <span className="text-xs text-white font-medium">{item.rating}</span>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="mb-2">
              <span className="inline-block bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full">
                {item.category}
              </span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm line-clamp-2">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}