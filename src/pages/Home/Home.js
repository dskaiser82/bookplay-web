import React from 'react';
import './Home.scss'
import Start from "./Start/Start.js"
import Menu from "./Menu/Menu.js"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
// import { faArrowRight} from '@fortawesome/free-solid-svg-icons';


class Home extends React.Component{
  constructor(props){
    super(props)

    this.voRef = React.createRef();

    this.pageUp = this.pageUp.bind(this)
  
    this.state = {
      menu: {
        menu: "end-titles", //end-titles or start-options
        options: {
          on: false,
          music: true,
          vo: true
        },
        img:{
          cover: "/wolf/img/menu/cover.png",
          titles: "/wolf/img/menu/titles.png",
          credits: "/wolf/img/menu/credits.png"
        },
      },
      pageCounter: 0,
      pages : [
        {
          img: "/wolf/img/pages/p1.png" ,
          vo: "/wolf/music/vo/wolf_vo_1.mp3",
          text: 'In The beginning there was a Spirit Wolf, and here Mother was the Moon'
        },
        {
          img: "/wolf/img/pages/p2.png" ,
          vo:  "/wolf/music/vo/wolf_vo_2.mp3",
          text: 'The Moon showered her daughter with the love of moonlight.'
        },
        {
          img: "/wolf/img/pages/p3.png" ,
          vo:  "/wolf/music/vo/wolf_vo_3.mp3",
          text: 'As the first night ended, Spirit Wolf took her very first sleep.'
        },
        {
          img: "/wolf/img/pages/p4.png" ,
          vo:  "/wolf/music/vo/wolf_vo_4.mp3",
          text: 'As Spirit Wolf awoke, she did not see her Mother above.  She looked, but could not see her Mother Moon. "My Mother has left me", said Spirit Wolf.'
        },
        {
          img: "/wolf/img/pages/p5.png" ,
          vo:  "/wolf/music/vo/wolf_vo_5.mp3",
          text: '"But I will find her!" And Spirit Wolf began her journey for the day. '
        },
        {
          img: "/wolf/img/pages/p6.png" ,
          vo: "/wolf/music/vo/wolf_vo_6.mp3",
          text: 'Spirit Wolf had great speed and traveled far.'
        },
        {
          img: "/wolf/img/pages/p7.png" ,
          vo: "/wolf/music/vo/wolf_vo_7.mp3",
          text: 'She ventured into a tall forest. And the Old Oak said, "My Mother is the Sun and her love as warm as the summer."'
        },
        {
          img: "/wolf/img/pages/p8.png" ,
          vo: "/wolf/music/vo/wolf_vo_8.mp3",
          text: 'Spirit Wolf ran until land ended and waves began. And the Sea Turtle said, "My Mother is the Sea and her love is as vast as eternity." '
        },
        {
          img: "/wolf/img/pages/p9.png" ,
          vo: "/wolf/music/vo/wolf_vo_9.mp3",
          text: 'Spirit Wolf journeyed to a land of ice. And the Proud Penguin said, "My Mother is the Snow, and her love is as soft as a blanket."  '
        },
        {
          img: "/wolf/img/pages/p10.png" ,
          vo: "/wolf/music/vo/wolf_vo_10.mp3",
          text: 'Spirit Wolf climbed the highest mountain. The Great Eagle said, "My Mother is the Sky, and her love is as strong as the wind."'
        },
        {
          img: "/wolf/img/pages/p11.png" ,
          vo: "/wolf/music/vo/wolf_vo_11.mp3",
          text: 'And then looking to the sky above, Spirit Wolf saw a faint image of Mother Moon. "She sleeps", said the Great Eagle. "But she will awaken come nighttime"'
        },
        {
          img: "/wolf/img/pages/p12.png" ,
          vo: "/wolf/music/vo/wolf_vo_12.mp3",
          text: 'And as the Sun set and day turned into night, Mother Moon awoke.'
        },
        {
          img: "/wolf/img/pages/p13.png" ,
          vo: "/wolf/music/vo/wolf_vo_13.mp3",
          text: 'In the beauty of moonlight the daughter wolf declared, "I am Spirit Wolf.  My Mother is the Moon. Her love is as bright as diamond." And Spirit Wolf cried, "Howwwoooooo."'
        }
      ] 
    }
  } //end c

  playAudio(file){
    this.voRef.current.pause()
    this.voRef.current.load()
    this.voRef.current.play()
   
  }

  playMusic(){
    let music = new Audio('/wolf/music/wolf_flute_final.mp3')
    music.play();
  }

 
  playPageTurn(){
    const audio = new Audio('/shared/audio/page_turn.mp3');
    audio.play();
  }

  pageUp(){
    if(this.state.pageCounter === 0){
      this.playMusic()
    }

    this.setState({pageCounter:this.state.pageCounter+1})
    
    this.playPageTurn()

    this.playAudio()
  
  }

  render(){
    let pages = this.state.pages;
    let pageCounter = this.state.pageCounter
    return(
      <div className="home">  
        <h1>{pageCounter} {pages.length}</h1>

        <audio ref={this.voRef} preload="true">
          <source src={ pageCounter <= pages.length-1 ? pages[pageCounter]["vo"] : ""}/>
        </audio>

        {pageCounter <= pages.length-1
          ? <Start pageUp={this.pageUp} page={pages[pageCounter]} />
          : <Menu/>
        }
        
      </div>
    )
  }
}

export default Home