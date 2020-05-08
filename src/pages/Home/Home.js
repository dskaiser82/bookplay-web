import React from 'react';
import './Home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';


class Home extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      email: "Please enter email"
    }
    this.handleEmail = this.handleEmail.bind(this)
  } //end c

  handleEmail(event){
    this.setState({email: event.target.value})
  }

  render(){
    return(
      <div className="home">  
        <img className="page" src="/wolf/img/p1.png"/>  
        <div className="awe">
          <p>In The beginning there was a spoirit wolf</p>
          <p><FontAwesomeIcon icon={faArrowLeft}/></p>

        </div>
      
      </div>
    )
  }
}

export default Home