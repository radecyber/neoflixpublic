export interface MockContent {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  year: number;
  genre: string[];
  rating: string;
  subtitles: Array<{
    language: string;
    code: string;
    url: string;
  }>;
}

export const mockContent: MockContent[] = [
  {
    id: '1',
    title: 'Detective Poirot: The Third Floor Flat',
    description: 'Hercule Poirot and friends accidentally discover a dead woman in a London apartment after a mix-up with keys. Poirot investigates the tenants and visitors, piecing together subtle clues about timing, relationships, and lies. In the end, he unmasks the murderer by revealing how access to the flat and a hidden motive fit perfectly together.',
    thumbnail: 'https://images.pexels.com/photos/3137078/pexels-photo-3137078.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://dn720503.ca.archive.org/0/items/poirot-series/01.05%20The%20Third%20Floor%20Flat.mp4',
    duration: '50m 47s',
    year: 1989,
    genre: ['Drama', 'Crime'],
    rating: 'TV-12',
    subtitles: [
      { language: 'English', code: 'en', url: '/subtitles/poirot-en.vtt' },
      { language: 'Serbian', code: 'sr', url: '/subtitles/poirot-sr.vtt' },
      { language: 'Spanish', code: 'es', url: '/subtitles/poirot-es.vtt' }
    ]
  },
  {
    id: '2',
    title: 'Detective Poirot: The Incredible Theft',
    description: 'Hercule Poirot is called to investigate the disappearance of top-secret military plans from the home of a wealthy politician, Lord Mayfield. The suspects include houseguests with potential motives, including espionage and personal gain. Using his trademark logic and observation, Poirot uncovers a clever scheme involving deception, blackmail, and a surprising culprit',
    thumbnail: 'https://images.pexels.com/photos/3137078/pexels-photo-3137078.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://ia601708.us.archive.org/0/items/poirot-series/01.08%20The%20Incredible%20Theft.mp4',
    duration: '51m 49s',
    year: 2023,
    genre: ['Drama', 'Crime'],
    rating: 'TV-12',
    subtitles: [
      { language: 'English', code: 'en', url: '/subtitles/nile-en.vtt' },
      { language: 'Serbian', code: 'sr', url: '/subtitles/nile-sr.vtt' },
      { language: 'French', code: 'fr', url: '/subtitles/nile-fr.vtt' }
    ]
  },
  {
    id: '3',
    title: 'Detective Poirot: The Orient Express Mystery',
    description: 'Trapped on the famous Orient Express during a snowstorm, Poirot must solve a murder when one of the passengers is found dead in their compartment.',
    thumbnail: 'https://images.pexels.com/photos/3137078/pexels-photo-3137078.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://dn720503.ca.archive.org/0/items/poirot-series/12.03%20Murder%20on%20the%20Orient%20Express.mp4',
    duration: '1h 32m 51s',
    year: 2023,
    genre: ['Mystery', 'Drama', 'Period'],
    rating: 'TV-14',
    subtitles: [
      { language: 'English', code: 'en', url: '/subtitles/orient-en.vtt' },
      { language: 'Serbian', code: 'sr', url: '/subtitles/orient-sr.vtt      
      { language: 'German', code: 'de', url: '/subtitles/orient-de.vtt' }
    ]
  },
  {
    id: '4',
    title: 'Detective Poirot: Triangle At Rhodes',
    description: 'A thrilling crime series set in modern-day London where detectives race against time to solve a series of connected murders before the killer strikes again.',
    thumbnail: 'https://images.pexels.com/photos/3137078/pexels-photo-3137078.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    duration: '45m',
    year: 2024,
    genre: ['Crime', 'Thriller', 'Drama'],
    rating: 'TV-MA',
    subtitles: [
      { language: 'English', code: 'en', url: '/subtitles/london-en.vtt' },
      { language: 'Serbian', code: 'sr', url: '/subtitles/london-sr.vtt' }
    ]
  },
  {
    id: '5',
    title: 'Ocean Mysteries',
    description: 'Dive deep into the unexplored mysteries of our oceans. This documentary series reveals the secrets hidden beneath the waves and the creatures that call it home.',
    thumbnail: 'https://images.pexels.com/photos/544197/pexels-photo-544197.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
    duration: '50m',
    year: 2024,
    genre: ['Documentary', 'Nature', 'Science'],
    rating: 'TV-G',
    subtitles: [
      { language: 'English', code: 'en', url: '/subtitles/ocean-en.vtt' },
      { language: 'Serbian', code: 'sr', url: '/subtitles/ocean-sr.vtt' },
      { language: 'Portuguese', code: 'pt', url: '/subtitles/ocean-pt.vtt' }
    ]
  },
  {
    id: '6',
    title: 'Space Chronicles',
    description: 'An epic journey through space exploring distant galaxies, black holes, and the search for extraterrestrial life. Cutting-edge science meets stunning visuals.',
    thumbnail: 'https://images.pexels.com/photos/73873/rocket-launch-rocket-take-off-nasa-73873.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4',
    duration: '1h 15m',
    year: 2024,
    genre: ['Documentary', 'Science', 'Space'],
    rating: 'TV-PG',
    subtitles: [
      { language: 'English', code: 'en', url: '/subtitles/space-en.vtt' },
      { language: 'Serbian', code: 'sr', url: '/subtitles/space-sr.vtt' },
      { language: 'Japanese', code: 'ja', url: '/subtitles/space-ja.vtt' }
    ]
  },
  {
    id: '7',
    title: 'The Crown Chronicles',
    description: 'A historical drama following the reign of Queen Elizabeth II from the 1940s to modern times. Witness the personal intrigues, political rivalries, and events that shaped the second half of the 20th century.',
    thumbnail: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    duration: '1h 2m',
    year: 2024,
    genre: ['Drama', 'Historical', 'Biography'],
    rating: 'TV-MA',
    subtitles: [
      { language: 'English', code: 'en', url: '/subtitles/crown-en.vtt' },
      { language: 'Serbian', code: 'sr', url: '/subtitles/crown-sr.vtt' },
      { language: 'French', code: 'fr', url: '/subtitles/crown-fr.vtt' }
    ]
  },
  {
    id: '8',
    title: 'Cyberpunk 2087',
    description: 'In a dystopian future where technology and humanity collide, a group of rebels fights against corporate control. High-octane action meets philosophical questions about what it means to be human.',
    thumbnail: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
    duration: '2h 15m',
    year: 2024,
    genre: ['Sci-Fi', 'Action', 'Thriller'],
    rating: 'TV-MA',
    subtitles: [
      { language: 'English', code: 'en', url: '/subtitles/cyber-en.vtt' },
      { language: 'Serbian', code: 'sr', url: '/subtitles/cyber-sr.vtt' },
      { language: 'Japanese', code: 'ja', url: '/subtitles/cyber-ja.vtt' }
    ]
  },
  {
    id: '9',
    title: 'Mountain Rescue',
    description: 'Follow an elite mountain rescue team as they risk their lives to save others in the most dangerous conditions. Real stories of heroism, survival, and the unbreakable human spirit.',
    thumbnail: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4',
    duration: '48m',
    year: 2024,
    genre: ['Documentary', 'Adventure', 'Drama'],
    rating: 'TV-14',
    subtitles: [
      { language: 'English', code: 'en', url: '/subtitles/rescue-en.vtt' },
      { language: 'Serbian', code: 'sr', url: '/subtitles/rescue-sr.vtt' },
      { language: 'German', code: 'de', url: '/subtitles/rescue-de.vtt' }
    ]
  }
];