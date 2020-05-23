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
          text: "In The beginning there was a Spirit Wolf, and here Mother was the Moon"
        },
        {
          img: "/wolf/img/pages/p2.png" ,
          vo: null,
          text: "In The beginning there was a Spirit Wolf, and here Mother was the Moon"
        },
        {
          img: "/wolf/img/pages/p3.png" ,
          vo: null,
          text: "In The beginning there was a Spirit Wolf, and here Mother was the Moon"
        },
        {
          img: "/wolf/img/pages/p4.png" ,
          vo: null,
          text: "In The beginning there was a Spirit Wolf, and here Mother was the Moon"
        },
        {
          img: "/wolf/img/pages/p5.png" ,
          vo: null,
          text: "In The beginning there was a Spirit Wolf, and here Mother was the Moon"
        },
        {
          img: "/wolf/img/pages/p6.png" ,
          vo: null,
          text: "In The beginning there was a Spirit Wolf, and here Mother was the Moon"
        },
        {
          img: "/wolf/img/pages/p7.png" ,
          vo: null,
          text: "In The beginning there was a Spirit Wolf, and here Mother was the Moon"
        },
        {
          img: "/wolf/img/pages/p8.png" ,
          vo: null,
          text: "In The beginning there was a Spirit Wolf, and here Mother was the Moon"
        },
        {
          img: "/wolf/img/pages/p9.png" ,
          vo: null,
          text: "In The beginning there was a Spirit Wolf, and here Mother was the Moon"
        },
        {
          img: "/wolf/img/pages/p10.png" ,
          vo: null,
          text: "In The beginning there was a Spirit Wolf, and here Mother was the Moon"
        },
        {
          img: "/wolf/img/pages/p11.png" ,
          vo: null,
          text: "In The beginning there was a Spirit Wolf, and here Mother was the Moon"
        },
        {
          img: "/wolf/img/pages/p12.png" ,
          vo: null,
          text: "In The beginning there was a Spirit Wolf, and here Mother was the Moon"
        },
        {
          img: "/wolf/img/pages/p13.png" ,
          vo: null,
          text: "In The beginning there was a Spirit Wolf, and here Mother was the Moon"
        }
      ] 
    }
  } //end c

  playAudio(){
    const audio = new Audio('/wolf/music/wolf_flute_final.mp3');
    audio.play();
  }

  pageUp(){
    this.setState({pageCounter:this.state.pageCounter+1})
    if(this.state.pageCounter === 0){
      this.playAudio()
    }

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