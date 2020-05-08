import React from 'react';
import './Home.scss'

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
      </div>
    )
  }
}

export default Home