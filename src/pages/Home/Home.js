import React from 'react';
import './Home.scss'
import Start from "./Start/Start.js"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
// import { faArrowRight} from '@fortawesome/free-solid-svg-icons';


class Home extends React.Component{
  constructor(props){
    super(props)

    this.pageUp = this.pageUp.bind(this)
  
    this.state = {
      pageCounter: 0,
      pages : [
        {
          img: "/wolf/img/pages/p1.png" ,
          vo: null,
          text: 'In The beginning there was a Spirit Wolf, and here Mother was the Moon'
        },
        {
          img: "/wolf/img/pages/p2.png" ,
          vo: null,
          text: 'The Moon showered her daughter with the love of moonlight.'
        },
        {
          img: "/wolf/img/pages/p3.png" ,
          vo: null,
          text: 'As the first night ended, Spirit Wolf took her very first sleep.'
        },
        {
          img: "/wolf/img/pages/p4.png" ,
          vo: null,
          text: 'As Spirit Wolf awoke, she did not see her Mother above.  She looked, but could not see her Mother Moon. "My Mother has left me", said Spirit Wolf.'
        },
        {
          img: "/wolf/img/pages/p5.png" ,
          vo: null,
          text: '"But I will find her!" And Spirit Wolf began her journey for the day. '
        },
        {
          img: "/wolf/img/pages/p6.png" ,
          vo: null,
          text: 'Spirit Wolf had great speed and traveled far.'
        },
        {
          img: "/wolf/img/pages/p7.png" ,
          vo: null,
          text: 'She ventured into a tall forest. And the Old Oak said, "My Mother is the Sun and her love as warm as the summer."'
        },
        {
          img: "/wolf/img/pages/p8.png" ,
          vo: null,
          text: 'Spirit Wolf ran until land ended and waves began. And the Sea Turtle said, "My Mother is the Sea and her love is as vast as eternity." '
        },
        {
          img: "/wolf/img/pages/p9.png" ,
          vo: null,
          text: 'Spirit Wolf journeyed to a land of ice. And the Proud Penguin said, "My Mother is the Snow, and her love is as soft as a blanket."  '
        },
        {
          img: "/wolf/img/pages/p10.png" ,
          vo: null,
          text: 'Spirit Wolf climbed the highest mountain. The Great Eagle said, "My Mother is the Sky, and her love is as strong as the wind."'
        },
        {
          img: "/wolf/img/pages/p11.png" ,
          vo: null,
          text: 'And then looking to the sky above, Spirit Wolf saw a faint image of Mother Moon. "She sleeps", said the Great Eagle. "But she will awaken come nighttime"'
        },
        {
          img: "/wolf/img/pages/p12.png" ,
          vo: null,
          text: 'And as the Sun set and day turned into night, Mother Moon awoke.'
        },
        {
          img: "/wolf/img/pages/p13.png" ,
          vo: null,
          text: 'In the beauty of moonlight the daughter wolf declared, "I am Spirit Wolf.  My Mother is the Moon. Her love is as bright as diamond." And Spirit Wolf cried, "Howwwoooooo."'
        }
      ] 
    }
  } //end c

  playAudio(){
    const audio = new Audio('/wolf/music/wolf_flute_final.mp3');
    audio.play();
  }

  playPageTurn(){
    const audio = new Audio('/shared/audio/page_turn.mp3');
    audio.play();
  }

  pageUp(){
    this.setState({pageCounter:this.state.pageCounter+1})
    if(this.state.pageCounter === 0){
      this.playAudio()
    }

    this.playPageTurn()

  }

  render(){
    let pages = this.state.pages;
    let pageCounter = this.state.pageCounter
    return(
      <div className="home">  
        <h1>{pageCounter}</h1>

        {pageCounter <= 12
          ? <Start pageUp={this.pageUp} img={pages[pageCounter]["img"]} text={pages[pageCounter]["text"]} />
          : <h1>DONE</h1>
        }
        
      </div>
    )
  }
}

export default Home