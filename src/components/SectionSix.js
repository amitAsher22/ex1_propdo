import React from 'react'
import img1 from '../Images/prop1.jpg'
import img2 from '../Images/prop2.jpg'
import img3 from '../Images/prop3.jpg'
import img4 from '../Images/prop4.jpg'
import img5 from '../Images/prop5.jpg'

//// css
import '../css_style/SectionSix.css'

function SectionSix() {
  
  return (
    <div>
    <h1 className='titleImages'>Images</h1>
    <div className='imges'>
      <img src={img1}/>
      <img src={img2}/>
      <img src={img3}/>
      <img src={img4}/>
      <img src={img5}/>
    </div>
    </div>
  )
}

export default SectionSix