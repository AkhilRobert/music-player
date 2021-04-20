// This is for testing purpose
// This also be treated as data coming from network 🤔

import sugarCrash from '../assets/music/sugarcrash.mp3';
import spirits from '../assets/music/spirits.mp3';

import sugarCrashCover from '../assets/cover/sugarcrash.webp';
import spiritsCover from '../assets/cover/spirits.webp';

interface IAudioData {
  name: string;
  artist: string;
  location: string;
  cover: any;
}

export const dummyData: IAudioData[] = [
  {
    name: 'sugar crash',
    artist: 'ElyOtto',
    location: sugarCrash,
    cover: sugarCrashCover,
  },

  {
    name: 'spirits',
    artist: 'Strumbellas',
    location: spirits,
    cover: spiritsCover,
  },
];

export const dummyMaxSize = dummyData.length - 1;
