import React, { useState } from 'react';
import './Home.scss';
import Page from '../Page/Page';
import { pages } from './pages';
import { debounce } from '../../helpers';

export default function Home() {
  const [pageCounter, setPageCounter] = useState(0);
  const voRef: any = React.createRef();

  const playAudio = () => {
    voRef.current.pause();
    voRef.current.load();
    voRef.current.play();
  };

  const playMusic = () => {
    let music = new Audio('/wolf/music/wolf_flute_final.mp3');
    music.play();
  };

  const playPageTurn = () => {
    const audio = new Audio('/shared/audio/page_turn.mp3');
    audio.play();
  };

  if (pageCounter === 0) {
    playMusic();
  }

  const pageUp = () => {
    setPageCounter(pageCounter + 1);
    playPageTurn();
    playAudio();
  };

  return (
    <div className="home">
      <audio ref={voRef} preload="true">
        <source
          src={
            pageCounter <= pages.length - 1
              ? pages[pageCounter]['vo']
              : ''
          }
        />
      </audio>

      <Page pageUp={pageUp} page={pages[pageCounter]} />
    </div>
  );
}
