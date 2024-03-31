import React, { useState, useEffect, useRef } from 'react';
import './Home.scss';
import Page from '../Page/Page';
import { pages } from '../Story/SpiritWolf/pages';
import { debounce } from '../../helpers';

export default function Home() {
  const [pageCounter, setPageCounter] = useState(0);
  const voRef = useRef<HTMLAudioElement>(null);
  const musicRef = useRef(
    new Audio('/wolf/music/wolf_flute_final.mp3')
  ); // Create the Audio object here
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const playAudio = () => {
    if (voRef.current) {
      voRef.current.pause();
      voRef.current.load();
      voRef.current.play().catch((error) => {
        console.error('Playback failed', error);
      });
    }
  };

  const toggleMusicPlayback = () => {
    if (isMusicPlaying) {
      musicRef.current.pause();
    } else {
      musicRef.current.play().catch((error) => {
        console.error('Playback failed', error);
      });
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  const playPageTurn = () => {
    const audio = new Audio('/shared/audio/page_turn.mp3');
    audio.play();
  };

  const pageUp = () => {
    setPageCounter((prevState) => prevState + 1);
    playPageTurn();
  };

  const debouncedPageUp = debounce(function () {
    pageUp();
  }, 500);

  useEffect(() => {
    document.addEventListener('keydown', debouncedPageUp);
    return () => {
      document.removeEventListener('keydown', debouncedPageUp);
    };
  }, [pageCounter, debouncedPageUp]);

  useEffect(() => {
    playAudio();
    if (pageCounter > 13) {
      setPageCounter(0);
    }
  }, [pageCounter]);

  useEffect(() => {
    // Set the volume and other properties of the music here
    musicRef.current.volume = 0.3;

    // Cleanup function to pause and reset the music when the component unmounts
    return () => {
      musicRef.current.pause();
      musicRef.current.currentTime = 0; // Optionally reset the time
    };
  }, []);

  return (
    <div className="home">
      <audio ref={voRef} preload="auto">
        <source
          src={pages[pageCounter]?.vo || ''}
          type="audio/mpeg"
        />
      </audio>

      <Page page={pages[pageCounter]} />
      <button className="button-play" onClick={toggleMusicPlayback}>
        {isMusicPlaying ? 'Pause Music' : 'Play Music'}
      </button>
    </div>
  );
}
