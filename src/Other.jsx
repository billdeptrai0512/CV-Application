/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function ButtonSelection({activeIndex , toggleExpand}) {
 

    const activeButtonStyle = {backgroundColor: '#555555'}

    const activeTextStyle = {
        transform:"scale(0.9)", 
        transition: 'transform 300ms cubic-bezier(.2,2,1,1)',
    }

    return (
        <div className='select-section'> 
            <button className='education-expand' onClick={() => toggleExpand(0)}
            style={activeIndex === 0 ? activeButtonStyle : null}>
              <h1 style={activeIndex === 0 ? activeTextStyle : null}>Education</h1>
            </button>
            <button className='expeience-expand' onClick={() => toggleExpand(1)}
                style={activeIndex === 1 ? activeButtonStyle : null}>
              <h1 style={activeIndex === 1 ? activeTextStyle : null} >Experience</h1>
            </button>
        </div>
    )
}

function EducationForm({education , isOpen, toggleOpen, index, addEducation, updateEducation, removeEducation}) {

    const [formValues, setFormValues] = useState({
        school:'',
        degree:'',
        location:'',
        schoolStartDate:'',
        schoolEndDate:'',
    })
    
    useEffect(() => {
        if (index !== null && education[index]) {
            setFormValues(education[index])
        } else {
            setFormValues({
                school:'',
                degree:'',
                location:'',
                schoolStartDate:'',
                schoolEndDate:'',
            })
    }}, [index, education])

    const handleChange = (key, value) => {
        setFormValues(prevValues => ({
            ...prevValues,
            [key]: value,
        }))
    }

    const handleSave = () => {
        if (index === null) {
            addEducation(formValues)
        } else {
            updateEducation(index, formValues)
        }
        toggleOpen(false)
    }

    const handleDelete = () => {
        removeEducation(index)
        toggleOpen(false)
    }


    return (
        <div className={isOpen ? "education-form open" : "education-form"}  > 
                <form>
                      <div> 
                        <label htmlFor="school">School</label>
                        <input type='text' value={formValues.school} onChange={(e) => handleChange('school', e.target.value)} />
                      </div>
                      <div>
                        <label htmlFor="degree">Degree</label>
                        <input type='email' value={formValues.degree} onChange={(e) => handleChange('degree', e.target.value)} />
                      </div>
                      <div>
                        <label htmlFor="location">Location</label>
                        <input type='email' value={formValues.location} onChange={(e) => handleChange('location', e.target.value)} />
                      </div>
                      <div className='date'>
                        <div>
                          <label htmlFor="date">Start Date</label>
                          <input type='text' value={formValues.schoolStartDate} onChange={(e) => handleChange('schoolStartDate', e.target.value)} />
                        </div>
                        <div>
                          <label htmlFor="date">End Date</label>
                          <input type='text' value={formValues.schoolEndDate} onChange={(e) => handleChange('schoolEndDate', e.target.value)}/>
                        </div>
                    </div>
                </form>
            <div className='education-form-interaction'>
                <button className="delete" onClick={handleDelete}>
                    <h4>Delete</h4>
                </button>
                    <div>
                        <button className="Save" onClick={handleSave}>
                          <h4>Save</h4>
                        </button>
                        <button className='Cancel' onClick={() => toggleOpen(false)}>
                          <h4>Cancel</h4>
                        </button>
                    </div>
            </div>
        </div>
    )
}

function EducationSection({education, updateEducation, addEducation, removeEducation}) {

    const [isOpen, setIsOpen] = useState(false)

    const [selectIndex, setSelectIndex] = useState(0) //note : never choose null

    function toggleOpen(index) {
        setSelectIndex(index)
        setIsOpen(!isOpen)
    }

    return (
        <div className='education-section'>

            <EducationForm 
                education={education}
                isOpen={isOpen}
                toggleOpen={() => setIsOpen(false)}
                index={selectIndex}
                updateEducation={updateEducation}
                addEducation={addEducation}
                removeEducation={removeEducation}/>

            {education.map((edu, index) => (
                <button key={index} className={isOpen ? 'collapsed-education-section hide' : 'collapsed-education-section'} onClick={() => toggleOpen(index)}>
                    <h3>{edu.school}</h3>
                </button>
            ))}

            {/* button below is create a blank form when it clicked */}
            <button className={isOpen ? 'add-section hide' : "add-section"} onClick={() => toggleOpen(null)}> 
                <FontAwesomeIcon icon={faPlus} />
                <h3>Education</h3>
            </button>
        </div>
    )
}

function ExperienceForm({experience, isOpen, toggleOpen, index, addExperience, updateExperience, removeExperience}) {

    const [formValues, setFormValues] = useState({
        company:'',
        position:'',
        location:'',
        companyStartDate:'',
        companyEndDate:'',
    })
    
    useEffect(() => {
        if (index !== null && experience[index]) {
            setFormValues(experience[index])
        } else {
            setFormValues({
                company:'',
                position:'',
                location:'',
                companyStartDate:'',
                companyEndDate:'',
            })
    }}, [index, experience])

    const handleChange = (key, value) => {
        setFormValues(prevValues => ({
            ...prevValues,
            [key]: value,
        }))
    }

    const handleSave = () => {
        if (index === null) {
            addExperience(formValues)
        } else {
            updateExperience(index, formValues)
        }
        toggleOpen(false)
    }

    const handleDelete = () => {
        removeExperience(index)
        toggleOpen(false)
    }


    return (
        <div className={isOpen ? "experience-form open" : "experience-form"} > 
                    <form>
                      <div> 
                        <label htmlFor="company">Company</label>
                        <input type='text' value={formValues.company} onChange={(e) => handleChange('company', e.target.value)}/>
                      </div>
                      <div>
                        <label htmlFor="position">Position</label>
                        <input type='email' value={formValues.position} onChange={(e) => handleChange('position', e.target.value)} />
                      </div>
                      <div>
                        <label htmlFor="location">Location</label>
                        <input type='text' value={formValues.location} onChange={(e) => handleChange('location', e.target.value)} />
                      </div>
                      <div className='date'>
                        <div>
                          <label htmlFor="date">Start Date</label>
                          <input type='text' value={formValues.companyStartDate} onChange={(e) => handleChange('companyStartDate', e.target.value)} />
                        </div>
                        <div>
                          <label htmlFor="date">End Date</label>
                          <input type='text' value={formValues.companyEndDate} onChange={(e) => handleChange('companyEndDate', e.target.value)}/>
                        </div>
                      </div>
                    </form>
            <div className='experience-form-interaction'>
                <button className="delete" onClick={handleDelete}>
                    <h4>Delete</h4>
                </button>
                    <div>
                        <button className="Save" onClick={handleSave}>
                          <h4>Save</h4>
                        </button>
                        <button className='Cancel' onClick={() => toggleOpen(false)}>
                          <h4>Cancel</h4>
                        </button>
                    </div>
            </div>
        </div>
    )
}

function ExperienceSection({experience, updateExperience, addExperience, removeExperience}) {

    const [isOpen, setOpen] = useState(false)

    const [selectIndex, setSelectIndex] = useState(0)

    function toggleOpen(index) {
        setOpen(!isOpen)
        setSelectIndex(index)
    }

    return (
        <div className='experience-section'>
            <ExperienceForm 
                experience={experience}
                isOpen={isOpen}
                toggleOpen={() => setOpen(false)}
                index={selectIndex}
                updateExperience={updateExperience}
                addExperience={addExperience}
                removeExperience={removeExperience}/>

            {experience.map((exp, index) => (
                <button key={index} className={isOpen ? 'collapsed-experience-section hide' : 'collapsed-experience-section'} onClick={() => toggleOpen(index)}>
                    <h3>{exp.company}</h3>
                </button>
            ))}

            <button className={isOpen ? 'add-section hide' : "add-section"} onClick={() => toggleOpen(null)}>
                <FontAwesomeIcon icon={faPlus} />
                <h3>Education</h3>
            </button>
        </div>
    )
}

export default function Other({education, updateEducation, addEducation, removeEducation, experience, updateExperience, addExperience, removeExperience }) {

    const [activeIndex, setActiveIndex] = useState(0)

    const toggleExpand = (index) => {
        setActiveIndex(index)
    }

      return (
        <>
          <div className='other'>
            <ButtonSelection activeIndex = {activeIndex} toggleExpand={toggleExpand} />

            {activeIndex === 0 ? 
                <EducationSection
                    education={education}
                    addEducation={addEducation}
                    updateEducation={updateEducation}
                    removeEducation={removeEducation}/> 
                :
                <ExperienceSection
                experience={experience}
                addExperience={addExperience}
                updateExperience={updateExperience}
                removeExperience={removeExperience}/> } 
            
            </div>   
        </>
      )
}

// add color