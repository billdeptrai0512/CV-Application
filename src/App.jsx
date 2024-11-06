/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import './App.css'


function Experience() {
  return (  
    <div className='element'>
      <h2>Experience</h2>
        <div className='icon'>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
    </div>
    )
}

function Project() {

  return (  
  <div className='element'>
    <h2>Project</h2>
    <div className='icon'>
      <FontAwesomeIcon icon={faChevronDown} />
    </div>
  </div>
  )

}

function Education() {
  return (  
    <div className='element'>
      <h2>Education</h2>
      <div className='icon'>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </div>
    )
}

function Other() {
    return (
      <>
        <Experience />
        <Project />
        <Education />
      </>
    )
}

function CreateElement({item}) {

  console.log(item)

    return (
      <>
      {item.map((ele, index) => (
          <div key={index}>
            <FontAwesomeIcon icon={ele.icon} />
            <span>{ele.infor}</span>
          </div>
      ))}
      </>  
    )

}

function Contact({email, phone, address}) {

  const item = [
    {
      infor: email,
      icon: faEnvelope
    }, 
    {
      infor: phone,
      icon: faPhone
    }, 
    {
      infor: address,
      icon: faLocationPin
    }, 

  ]

  return (
    <div className='contact'>
      <CreateElement item={item}/>
    </div>  
  )
}

function Name({name}) {
  return (
    <div className='name'>
      <h1> {name} </h1>
    </div>
  )
}

function ResumeContainer({ name ,email, phone, address }) {

  return (
    <div className='general' >
      <Name name={name}/>
      <Contact email={email} phone={phone} address={address}/>
    </div>
  )
}

function EditForm({name, setName, phone, setPhone, email, setEmail, address, setAddress}) {

  //create something here that receive change in the form and display it on Show Form
  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangePhone(e) {
    setPhone(e.target.value)
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }

  function handleChangeAddress(e) {
    setAddress(e.target.value)
  }

  return (
    <>
        <div className='edit'>
          <h2>Personal Information</h2>
          <form>
            <div>
              <label htmlFor="name">Full Name</label>
              <input type='text' value={name} onChange={handleChangeName}/>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type='email' value={email} onChange={handleChangeEmail}/>
            </div>
            <div>
              <label htmlFor="name">Phone</label>
              <input type='number' value={phone} onChange={handleChangePhone}/>
            </div>
            <div>
              <label htmlFor="name">Address</label>
              <input type='text' value={address} onChange={handleChangeAddress}/>
            </div>
          </form>
        </div>
        <div className='other'> 
          <Other />
        </div>  
    </>

  )
}

function App() {
  
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')

  return (
    <div className='app'>
      <div className='form'>
        <EditForm 
          name={name} setName={setName}
          phone={phone} setPhone={setPhone}
          email={email} setEmail={setEmail}
          address={address} setAddress={setAddress}
        />
      </div>
      <div className='resumeContainer'>
          <ResumeContainer 
            name={name}
            phone={phone}
            email={email}
            address={address}
          />
      </div>

    </div>
      

  )

}

export default App
