import React from 'react';
import './Home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';


class Home extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      email: "Please enter email"
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
        <img onClick={this.playAudio} className="page" src="/wolf/img/p1.png"/>  
        <div className="awe">
{/*           
          <p><FontAwesomeIcon icon={faArrowLeft}/></p> */}
          <p className="text">In The beginning there was a spoirit wolf and here Mother was the Moon</p>
          {/* <p><FontAwesomeIcon icon={faArrowRight}/></p> */}

        </div>
      
      </div>
    )
  }
}

export default Home