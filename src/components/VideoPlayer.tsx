import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Settings, 
  SkipBack, 
  SkipForward, 
  X,
  Subtitles
} from 'lucide-react';
import { MockContent } from '../data/mockContent';

interface VideoPlayerProps {
  content: MockContent;
  onClose: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ content, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [selectedSubtitle, setSelectedSubtitle] = useState<string>('');
  const [showSettings, setShowSettings] = useState(false);
  
  let controlsTimeout: NodeJS.Timeout;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (time: number) => {
    const video = videoRef.current;
    if (!video) return;
    
    video.currentTime = time;
    setCurrentTime(time);
  };

  const handleVolumeChange = (newVolume: number) => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      video.volume = volume;
      setIsMuted(false);
    } else {
      video.volume = 0;
      setIsMuted(true);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleMouseMove = () => {
    setShowControls(true);
    clearTimeout(controlsTimeout);
    controlsTimeout = setTimeout(() => setShowControls(false), 3000);
  };

  const skip = (seconds: number) => {
    const video = videoRef.current;
    if (!video) return;
    
    video.currentTime = Math.max(0, Math.min(video.currentTime + seconds, duration));
  };

  return (
    <div 
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-60 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Video element */}
      <video
        ref={videoRef}
        className="w-full h-full object-contain"
        src={content.videoUrl}
        onClick={togglePlay}
      />

      {/* Video title overlay */}
      <div className={`absolute top-4 left-4 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-white/10">
          <h2 className="text-white text-xl font-bold mb-1">{content.title}</h2>
          <div className="flex items-center space-x-2 text-sm text-gray-300">
            <span className="px-2 py-1 bg-gray-700 rounded text-xs">
              {content.rating}
            </span>
            <span>{content.year}</span>
            <span>•</span>
            <span>{content.duration}</span>
          </div>
        </div>
      </div>

      {/* Video controls */}
      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        {/* Progress bar */}
        <div className="mb-4">
          <div className="relative h-2 bg-gray-600 rounded-full cursor-pointer"
               onClick={(e) => {
                 const rect = e.currentTarget.getBoundingClientRect();
                 const percent = (e.clientX - rect.left) / rect.width;
                 handleSeek(percent * duration);
               }}>
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-200"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>

            {/* Skip buttons */}
            <button
              onClick={() => skip(-10)}
              className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-200"
            >
              <SkipBack className="w-5 h-5" />
            </button>

            <button
              onClick={() => skip(10)}
              className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-200"
            >
              <SkipForward className="w-5 h-5" />
            </button>

            {/* Volume controls */}
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleMute}
                className="p-2 text-white hover:text-gray-300 transition-colors"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={isMuted ? 0 : volume}
                onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                className="w-20"
              />
            </div>

            {/* Time display */}
            <span className="text-white text-sm">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Subtitles */}
            <div className="relative">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-200"
              >
                <Subtitles className="w-5 h-5" />
              </button>
              
              {showSettings && (
                <div className="absolute bottom-12 right-0 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg p-4 min-w-48">
                  <h3 className="text-white font-medium mb-3">Subtitles</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        setSelectedSubtitle('');
                        setShowSettings(false);
                      }}
                      className={`block w-full text-left px-3 py-2 rounded ${
                        selectedSubtitle === '' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      Off
                    </button>
                    {content.subtitles.map((subtitle) => (
                      <button
                        key={subtitle.code}
                        onClick={() => {
                          setSelectedSubtitle(subtitle.code);
                          setShowSettings(false);
                        }}
                        className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                          selectedSubtitle === subtitle.code 
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                            : 'text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        {subtitle.language}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Fullscreen */}
            <button className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-200">
              <Maximize className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;