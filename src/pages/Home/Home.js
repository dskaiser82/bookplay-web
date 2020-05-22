import React from 'react';
import './Home.scss'
import Start from "./Start/Start.js"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
// import { faArrowRight} from '@fortawesome/free-solid-svg-icons';


class Home extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      pages : [
        {
          img: "/wolf/img/pages/p1.png" ,
          vo: null,
          text: "In The beginning there was a Spirit Wolf, and here Mother was the Moon"
        }
      ] 
    }
    // this.handleEmail = this.handleEmail.bind(this)
  } //end c

  playAudio(){
    const audio = new Audio('/wolf/music/wolf_flute_final.mp3');
    audio.play();
  }

  render(){
    return(
      <div className="home">  
       
       <Start img={this.state.pages[0]["img"]} text={this.state.pages[0]["text"]} />
      
      </div>
    )
  }
}

export default Home