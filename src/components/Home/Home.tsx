import React, { useState, useEffect, useRef } from 'react';
import './Home.scss';
import BookPage from '../BookPage/BookPage';
import { PageType } from '../Story/types';
import { debounce } from '../../helpers';

type HomeProps = {
  pages: PageType[];
};

export default function Home({ pages }: HomeProps) {
  const [pageCounter, setPageCounter] = useState(0);
  const voRef = useRef<HTMLAudioElement>(null);
  const musicRef = useRef(new Audio(pages[0].music)); // Create the Audio object here
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
    musicRef.current.volume = 0.5;

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

      <BookPage page={pages[pageCounter]} />
      {pageCounter === 0 && (
        <div className="button-play" onClick={toggleMusicPlayback}>
          {isMusicPlaying ? 'Pause Music' : 'Play Music'}
        </div>
      )}
    </div>
  );
}
