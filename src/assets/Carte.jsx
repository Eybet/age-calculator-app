
import React, { useState , useEffect } from 'react'



const Input = ({Text , setDate , place, value ,L}) =>{
    return (
      
        <div className='flex flex-col gap-1 cursor-pointer'>
         <span>{Text}</span>
         <input maxLength={L} value={value} type="text" onChange={(e)=> setDate(e.target.value.trim())  } className=' font-bold outline-non w-[15vh] h-[6vh] border-gray-200 border-1 px-4 active: border-[#864dfd]' placeholder={place}/>
        </div>
        
    )
    
    
}




const Carte = () => {
const [Day , setDay] = useState("--");
const [Month , setMonth] = useState("--");
const [Year , setYear] = useState("--");
const [D , setD] = useState(0);
const [M , setM] = useState(0);
const [Y , setY] = useState(0);
const [value , setValue] = useState()

const Calcule = (D , M , Y)=>{
    const  today = new Date()
     let DD = today.getDate() - D
     let MM = today.getMonth() + 1 - M
     let YY = today.getFullYear() - Y 
           
    if (DD < 0) {
      M--;
      const prev = new Date(today.getFullYear() , today.getMonth() , 0)
      YY--
      DD += prev.getDate() ;
      
    } if(MM < 0) {
      MM += 12;
      YY--;
    }if (MM === 0){ MM=11}
    setYear(YY)
    setDay(DD)
    setMonth(MM)
}

useEffect(()=>{


setValue()


},[value])

//    console.log(D,M,Y);
  return (
    <div className='w-full h-[100vh] bg-[#f0f0f0] flex justify-center items-center relative '>
        <div className="bg-white h-[60vh] w-[85vh] px-13 flex flex-col justify-center rounded-bl-2xl rounded-br-[20vh] shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
         <div className='flex gap-7 w-[70vh] h-[15vh] border-b border-gray-200'>
            <Input Text="DAY" setDate={setD} place="DD" value={value} L="2"/>
            <Input Text="MONTH" setDate={setM} place="MM" value={value} L="2"/>
            <Input Text="YEAR" setDate={setY} place="YYYY" value={value} L="4"/>
         </div>
         <div className="text-[8vh] flex flex-col font-black italic ">
            <p><span className='text-[#864dfd]'>{Year}</span> years</p>
            <p><span className='text-[#864dfd]'>{Month}</span> months</p>
            <p><span className='text-[#864dfd]'>{Day}</span> days</p>
         </div>
           
        </div>
        <button className='bg-black w-17 h-17 flex justify-center items-center rounded-[50%] absolute cursor-pointer top-62 right-100 transition-all duration-300 ease-linear hover:bg-[#864dfd] hover:scale-105' onClick={()=>{
          if (Y>0 && M>0 && D>0){Calcule(D , M , Y) ; setValue('')} else {setYear("--"); setMonth("--"); setDay("--") ; setValue('')}
           }}>
         <img src="./icon-arrow.svg" alt=""  className='h-8'/>
        </button>
      
    </div>
  )
}


export default Carte