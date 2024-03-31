import React from 'react';
import './Home.scss';
import Start from './Start/Start.js';
import Menu from './Menu/Menu.js';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.musicRef = React.createRef();

    this.pageUp = this.pageUp.bind(this);

    this.state = {
      music: '/beast/music/beast-intro.m4a',
      pageCounter: 0,
    };
  } //end

  playMusic() {
    // will load and play on next following page
    if (this.state.pageCounter === 1) {
      this.musicRef.current.load();
      this.musicRef.current.play();
    }

    if (this.state.pageCounter === 13) {
      this.setState({ music: '/beast/music/town-edited.m4a' });
      this.musicRef.current.load();
      this.musicRef.current.play();
    }
  }

  playPageTurn() {
    const audio = new Audio('/shared/audio/page_turn.mp3');
    audio.play();
  }

  pageUp() {
    this.setState((prevState) => ({
      pageCounter: prevState.pageCounter + 1,
    }));

    this.playPageTurn();

    this.playMusic();
  }

  render() {
    let pageCounter = this.state.pageCounter;
    let music = this.state.music;
    return (
      <div className="home">
        <audio ref={this.musicRef} preload="true">
          <source src={music} />
        </audio>

        {pageCounter > -1 ? (
          <Start pageUp={this.pageUp} pageCounter={pageCounter} />
        ) : (
          <Menu />
        )}

        {pageCounter}
      </div>
    );
  }
}

export default Home;
