import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../App.css'

function ClowdApp() {
  const [city, setCity] = useState(null)
  const [search, setSearch] = useState("pune")

  let tool = new Date().toLocaleTimeString()
  const[time,setTime]=useState(tool)

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=4401dee7710ebe12bbbb9b97bffa933e`).then((res) => {
      console.log(res.data);
      setCity(res.data)
      
    })
  }, [search])
  function handle(){
  let  tool = new Date().toLocaleTimeString()
  setTime(tool)
  }
  setInterval(handle,1000)
  return (
    <div>
<h5>Check your city weather</h5>
      <div className='clowd'>
        <div>
          <input  type='search'  onChange={(e) => setSearch(e.target.value)} placeholder='🔍ENTER CITY NAME' />
        </div>
        {!city ? (<span>No data found</span>) : (<div> <h1> {search}</h1>
          <h4 className='hook'>    {city.main.temp}   </h4>
          <h6> Min temp:{city.main.temp_min}゜cel  &  Max temp:{city.main.temp_max}゜cel <br></br> humidity: {city.main.humidity}</h6>
        </div>)}
       <p className='time'>⏲️{time}</p>
        <marquee direction='round'><h1 className='jj'>⛈️</h1></marquee>
        <marquee direction='right'><h1 className='jj'>🌤️</h1></marquee>
        <marquee direction='left'> <p className='cool'>⛅</p></marquee>

      </div>


    </div>
  )
}

export default ClowdApp