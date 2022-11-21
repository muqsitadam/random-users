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
        <div className="flex items-center justify-center h-screen">
          <div className='w-1/4 bg-blue-200 p-4 border-1 border-solid rounded-lg'>
            <img className='mx-auto rounded-full' src={pictureSrc} alt={name}></img>
            <p className='flex flex-row mx-auto text-lg leading-loose font-display'><FaPortrait className='m-2'/>: {name}, {age}yrs</p>
            <p className='flex flex-row mx-auto text-lg leading-loose font-display'><FaEnvelope className='m-2'/>: {email}</p>
            <p className='flex flex-row mx-auto text-lg leading-loose font-display'><FaPhoneAlt className='m-2'/>: {phoneNumber}</p>
            <p className='flex flex-row mx-auto text-lg leading-loose font-display'><FaHome className='m-2'/>: {location}</p>
            <button className='text-center rounded-full border-1 border-solid bg-cyan-500 p-2 text-white mx-auto' onClick={() => window.location.reload(true)}>Random User</button>
          {/* youssoufa moukoko */}
          </div>
        </div>
      );
    }
  }
}

export default App;
