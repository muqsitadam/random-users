import React, {Component} from 'react'
import { FaHome, FaPhoneAlt, FaPortrait, FaEnvelope } from "react-icons/fa";
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      pictureSrc: '',
      name: '',
      age: '',
      email: '',
      phoneNumber: '',
      location: '',
      loading: false
    }
  }

 componentDidMount = () => {
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => {
      const user = data.results[0]
      console.log(user)
      const {title, first, last} =  user.name
      const {street,city,state,country} = user.location
      this.setState({
        pictureSrc: user.picture.large,
        name: `${title} ${first} ${last}`,
        age: user.dob.age,
        email: user.email,
        phoneNumber: user.phone,
        location: `${street.number}, ${street.name}, ${city}, ${state}, ${country}`,
        loading: true
      })
    })
  }



  render(){
    const {pictureSrc,name,age,email,phoneNumber,location,loading} = this.state

    if(!loading){
      return(
        <div id='loader'></div>
      )
    }else{
      return (
        <div className="text-center">
          <div className='w-1/2'>
            <img src={pictureSrc} alt={name}></img>
            <p className='flex flex-row'><FaPortrait/>: {name}, {age}yrs</p>
            <p><FaEnvelope/>: {email}</p>
            <p><FaPhoneAlt/>: {phoneNumber}</p>
            <p><FaHome/>: {location}</p>
          </div>
          <button className='button' onClick={() => window.location.reload(true)}>Random User</button>
          {/* youssoufa moukoko */}
        </div>
      );
    }
  }
}

export default App;
