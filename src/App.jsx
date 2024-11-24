/* eslint-disable react/prop-types */
import { useState } from 'react'
import Other from './Other'
import ResumeContainer from './ResumeContainer'
import './App.css'

function PersonalDetails({personal, updateProfile}) {

  return (
    <>
        <div className='edit'>
          <h2>Personal Details</h2>
          <form>
            <div>
              <label htmlFor="name">Full Name</label>
              <input type='text' value={personal.name} onChange={(e) => (updateProfile('name', e.target.value))}/>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type='email' value={personal.email} onChange={(e) => (updateProfile('email', e.target.value))}/>
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input type='text' value={personal.phone} onChange={(e) => (updateProfile('phone', e.target.value))}/>
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input type='text' value={personal.address} onChange={(e) => (updateProfile('address', e.target.value))}/>
            </div>
          </form>
        </div>
    </>

  )
}

function App() {
  
  const [profile, setProfile] = useState({
    name: "Bill Nguyen",
    phone: "0902822192",
    email: "billnguyen05121998@gmail.com",
    address: "Ho Chi Minh, VN",
  })

  const updateProfile = (key, value) => {
    setProfile(prevProfile => ({
      ...prevProfile, [key]:value
    }))
  }

  const [education, setEducation] = useState([
    {
      school:'University of Econommy',
      degree: 'Financal Statistic',
      schoolStartDate: '12/2016',
      schoolEndDate: '05/2021',
      location: "Ho Chi Minh, VN",
    },
    {
      school:'University of Econommyyyyyyy',
      degree: 'Financal Statistic',
      schoolStartDate: '12/2016',
      schoolEndDate: '05/2021',
      location: "Ho Chi Minh, VN",
    }
  ])

  const updateEducation = (index, updates) => {
    setEducation(prevEducation => 
      prevEducation.map((item, i) => 
        i === index ? {...item, ...updates } : item
      )
    )
  }

  const addEducation = (newEducation) => {
    setEducation((prevEducation => [...prevEducation, newEducation]))
  }

  const removeEducation = (index) => {
    setEducation(prevEducation => prevEducation.filter((_, i) => i !== index))
  }

  const [experience, setExperience] = useState([
    {
      company: 'SSI Securities Corporation',
      position: 'Stock Analysis',
      companyStartDate: '06/2021',
      companyEndDate: '1/2022',
      location: "Ho Chi Minh, VN",
    }
  ])

  const updateExperience = (index, updates) => {
    setExperience(prevExperience => 
      prevExperience.map((item, i) => 
        i === index ? {...item, ...updates } : item
      )
    )
  }

  const addExperience = (newExperience) => {
    setExperience((prevExperience => [...prevExperience, newExperience]))
  }

  const removeExperience = (index) => {
    setExperience(prevEducation => prevEducation.filter((_, i) => i !== index))
  }

  return (
    <div className='app'>
      <div className='form'>
        <PersonalDetails 
          personal={profile}
          updateProfile={updateProfile}
        />
        <Other
          education={education}
          updateEducation={updateEducation}
          addEducation={addEducation}
          removeEducation={removeEducation}
          experience={experience}
          updateExperience={updateExperience}
          addExperience={addExperience}
          removeExperience={removeExperience}
        />
      </div>
      <div className='resumeContainer'>
          <ResumeContainer 
            personal={profile}
            education={education}
            experience={experience}
          />
      </div>
    </div>
  )

}

export default App
