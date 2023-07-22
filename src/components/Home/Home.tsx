import React, { useState, useEffect, useRef } from 'react';
import './Home.scss';
import Page from '../Page/Page';
import { pages } from './pages';
import { debounce } from '../../helpers';

export default function Home() {
  const [pageCounter, setPageCounter] = useState(0);
  const voRef = useRef();

  const playAudio = () => {
    voRef.current.pause();
    voRef.current.load();
    voRef.current.play();
  };

  const playMusic = () => {
    let music = new Audio('/wolf/music/wolf_flute_final.mp3');
    music.volume = 0.3;
    music.play();
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
    if (pageCounter === 0) {
      document.addEventListener('keydown', debouncedPageUp);
    }

    return () => {
      document.removeEventListener('keydown', debouncedPageUp);
    };
  }, []);

  useEffect(() => {
    playAudio();
    if (pageCounter > 13) {
      setPageCounter(0);
    }

    if(pageCounter === 1) {
      playMusic();
    }

  }, [pageCounter]);

  return (
    <div className="home">
      <audio ref={voRef} preload="true">
        <source src={pages[pageCounter]?.vo || ''} />
      </audio>

      <Page page={pages[pageCounter]} />
    </div>
  );
}
