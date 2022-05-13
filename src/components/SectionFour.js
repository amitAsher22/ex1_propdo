import React ,{useState , useEffect} from 'react'
import data from '../transactions.json'
import '../css_style/SectionFour.css'

const SectionFour = () => {
  const [dataFilter ,setDataFilter] = useState([])
  const [rooms , setRooms] = useState('')


  useEffect(()=>{
    setDataFilter(data['properties']);
  },[])

console.log(dataFilter);
  return (
    <div>
    <div className='selectall'>
    <label>filter by number</label> 
    <select className='selectInput' onChange={(event)=> setRooms(event.target.value)}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    
  </select>
    </div>
 
    <div className='rooms'>
   {dataFilter.filter((room)=> room.num_rooms === Number(rooms)).map((item ,key)=> {
     return(
      <div key={key} className='cardss'>
              <p>{item.parking}</p>
        </div>
     )
   })}
    </div>
    </div>
  )
}

export default SectionFour