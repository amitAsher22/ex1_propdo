import React ,{useState , useEffect} from 'react'
import data from '../transactions.json'
import '../css_style/SectionFive.css'

const SectionFive = () => {
  const [dataSort ,setDataSort] = useState([])
  const [click , setClick]= useState(false)


  useEffect(()=>{
    setDataSort(data['properties']);
  },[])

  return (
    <div>
    <div className='divBtn'>
   <lable>sorting data</lable> <button  onClick={()=> setClick(!click)} className='btnSort'> {click ?   "hide data" : "show data"}</button>
    </div>
   <div className='sortDisply'>
   {click ?  (dataSort.sort((a ,b)=> a.price - b.price).map((item , key)=>{
       return(
        <div key={key} className='sortCardData'>
              <p>{item.parking}</p>
              <p>price : {item.price}</p>
        </div>
       )

     })) : <div>click button</div>}
  
   </div>
    </div>
  )
}

export default SectionFive