import React, { useRef, useState } from 'react';
import { dummyData, dummyMaxSize } from './data/';
import Controls from './components/Controls';
import ProgressBar from './components/ProgressBar';
import { convertSecondToMinutes, convertSecondToPercentage } from './utils';
import Details from './components/Details';

function App() {
  const [counter, setCounter] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(false);
  const [autoPlay, setAutoPlay] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>();
  const [percentage, setCurrentPercentage] = useState<string>('0%');

  const audioRef = useRef<HTMLAudioElement>(null);

  if (audioRef.current) {
    audioRef.current.addEventListener('timeupdate', () => {
      const currentTime = audioRef.current?.currentTime || 0;
      const duration = audioRef.current?.duration || 0;
      setCurrentTime(convertSecondToMinutes(currentTime));
      setCurrentPercentage(convertSecondToPercentage(currentTime, duration));
    });
  }

  function handlePlayPause() {
    const audio = audioRef.current;
    if (audio) {
      if (playing) audio.pause();
      else audio.play();
    }
    setPlaying((play) => !play);
  }

  function handleNext() {
    if (counter === dummyMaxSize) setCounter(0);
    else setCounter((count) => count + 1);
    setAutoPlay(true);
  }

  function handlePrevious() {
    if (counter === 0) setCounter(dummyMaxSize);
    else setCounter((count) => count - 1);
  }

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <Details
        songName={dummyData[counter].name}
        artist={dummyData[counter].artist}
        src={dummyData[counter].cover}
      />
      <audio
        src={dummyData[counter].location}
        ref={audioRef}
        onEnded={handleNext}
        autoPlay={autoPlay}
      />
      <ProgressBar time={currentTime!} percentage={percentage} />
      <Controls
        handlePlayPause={handlePlayPause}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        playing={playing}
      />
    </div>
  );
}

export default App;
