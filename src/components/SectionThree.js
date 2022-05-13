import React ,{useState , useEffect} from 'react'
import data from '../transactions.json'
import '../css_style/SectionThree.css'


const SectionThree = () => {
  const [dataifo ,setDataifo] = useState([])
  const [textFromInput , setTextFromInput] = useState('')


useEffect(()=>{
  setDataifo(data['properties']);
},[])



  return (
    <div>
      <div className='inputDiv'>
       <label>Search</label> <input className='search1'  type="search" placeholder='seatch by address..' onChange={(event)=> setTextFromInput(event.target.value)}/ >
     </div>
      <div className='cards'>
       {
       dataifo.filter((value)=>{
          if(textFromInput === ""){
            return value
          }else if(value.parking.toLowerCase().includes(textFromInput.toLocaleLowerCase()) ){
                return value
          }

        }).map((item , key)=>{
          return(
            <div key={key} className='cardReal'>
              <p>{item.parking}</p>
            </div>
          )
        })  
       }
        
      </div>
    </div> 
  )
}

export default SectionThree