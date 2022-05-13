import React from 'react'
import img from ".././Images/prop4.jpg"
import '../css_style/SectionTwo.css'

const SectionTwo = () => {
  return (
    <div className='sectiontwo'>
    <img className='pic4' src={img} alt="pic4"/>
    <div>
      <h2 className='discover'>Discover Our Best Properties</h2>
    </div>
    </div>
  )
}

export default SectionTwo