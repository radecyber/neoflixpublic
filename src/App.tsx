import React, { useState, useEffect } from 'react';
import { Play, Search, User, LogOut, Volume2, VolumeX, Maximize, Settings } from 'lucide-react';
import { mockContent, MockContent } from './data/mockContent';
import VideoPlayer from './components/VideoPlayer';
import AuthModal from './components/AuthModal';
import ContentGrid from './components/ContentGrid';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<MockContent | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContent, setFilteredContent] = useState(mockContent);

  useEffect(() => {
    // Check if user is logged in (mock local storage check)
    const savedUser = localStorage.getItem('netflix-user');
    if (savedUser) {
      setCurrentUser(savedUser);
    }
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredContent(mockContent);
    } else {
      setFilteredContent(
        mockContent.filter(content =>
          content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          content.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery]);

  const handleLogin = (email: string, password: string) => {
    // Mock login - in production, this would be a real API call
    localStorage.setItem('netflix-user', email);
    setCurrentUser(email);
    setShowAuthModal(false);
  };

  const handleSignup = (email: string, password: string) => {
    // Mock signup - in production, this would be a real API call
    localStorage.setItem('netflix-user', email);
    setCurrentUser(email);
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('netflix-user');
    setCurrentUser(null);
    setCurrentVideo(null);
  };

  const handlePlayVideo = (content: MockContent) => {
    if (!currentUser) {
      setShowAuthModal(true);
      return;
    }
    setCurrentVideo(content);
  };

  const handleCloseVideo = () => {
    setCurrentVideo(null);
  };

  if (currentVideo) {
    return (
      <VideoPlayer
        content={currentVideo}
        onClose={handleCloseVideo}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
      <Header
        currentUser={currentUser}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onAuthClick={() => setShowAuthModal(true)}
        onLogout={handleLogout}
      />

      {!searchQuery && (
        <div className="pt-4">
          <Hero
          featuredContent={mockContent[0]}
          onPlay={handlePlayVideo}
          isLoggedIn={!!currentUser}
          />
        </div>
      )}

      <ContentGrid
        content={filteredContent}
        onPlay={handlePlayVideo}
        searchQuery={searchQuery}
      />

      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onLogin={handleLogin}
          onSignup={handleSignup}
        />
      )}
    </div>
  );
}

export default App;