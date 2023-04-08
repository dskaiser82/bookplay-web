import React from 'react';
import './Home.scss';
import Page from './Start/Page';
import { pages } from './pages';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.voRef = React.createRef();

    this.pageUp = this.pageUp.bind(this);

    this.state = {
      menu: {
        menu: 'end-titles', //end-titles or start-options
        options: {
          on: false,
          music: true,
          vo: true,
        },
        img: {
          cover: '/wolf/img/menu/cover.png',
          titles: '/wolf/img/menu/titles.png',
          credits: '/wolf/img/menu/credits.png',
        },
      },
      pageCounter: 0,
      pages: pages,
    };
  } //end c

  playAudio(file: any) {
    this.voRef.current.pause();
    this.voRef.current.load();
    this.voRef.current.play();
  }

  playMusic() {
    let music = new Audio('/wolf/music/wolf_flute_final.mp3');
    music.play();
  }

  playPageTurn() {
    const audio = new Audio('/shared/audio/page_turn.mp3');
    audio.play();
  }

  pageUp() {
    if (this.state.pageCounter === 0) {
      this.playMusic();
    }

    this.setState({ pageCounter: this.state.pageCounter + 1 });

    this.playPageTurn();

    this.playAudio();
  }

  render() {
    let pages = this.state.pages;
    let pageCounter = this.state.pageCounter;
    return (
      <div className="home">
        <audio ref={this.voRef} preload="true">
          <source
            src={
              pageCounter <= pages.length - 1
                ? pages[pageCounter]['vo']
                : ''
            }
          />
        </audio>

        <Page pageUp={this.pageUp} page={pages[pageCounter]} />
      </div>
    );
  }
}

export default Home;
