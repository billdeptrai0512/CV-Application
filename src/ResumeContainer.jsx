/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';

function CreateElement({item}) {

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

function Name({name}) {
    return (
      <div className='name'>
        <h1> {name} </h1>
      </div>
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

function EducationContainer({education}) {
  
    return (
      <div className='education-info-section'>
          <h2 className='header-text'>Education</h2>
          {education.map((edu, index) => (  
            <div key={index} className='education-infor'>
              <div className='infor-group'>
                <p className='date'>{edu.schoolStartDate} - {edu.schoolEndDate}</p>
                <p>{edu.location}</p>
              </div>
              <div className='infor-group-2'>
                <p>{edu.school}</p>
                <p>{edu.degree}</p>
              </div>
            </div>
          ))}
      </div>
    )
}

function ExperienceContainer({experience}) {

  return (
    <div className='education-info-section'>

        <h2 className='header-text'>Experience</h2>

        {experience.map((exp, index) => (
          <div key={index}className='education-infor'>
            <div className='infor-group'>
              <p className='date'>{exp.companyStartDate} - {exp.companyEndDate}</p>
              <p>{exp.location}</p>
            </div>
            <div className='infor-group-2'>
              <p>{exp.company}</p>
              <p>{exp.position}</p>
            </div>
          </div>
        ))}

    </div>
  )
}

export default function ResumeContainer({personal, education, experience}) {

    return (
    <>
      <div className='general' >
        <Name name={personal.name}/>
        <Contact email={personal.email} phone={personal.phone} address={personal.address}/>
      </div>
      <div className='general'>
        <EducationContainer 
          education={education} 
        />
      </div>
      <div className='general'>
        <ExperienceContainer 
          experience={experience} 
        />
      </div>
    </>
    )
  }
