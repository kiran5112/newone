import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Clocks() {
    let time = new Date().toLocaleTimeString()
    const [ctime, setCtime] = useState(time)

    function handle() {
        let time = new Date().toLocaleTimeString()
        setCtime(time)
    }
    setInterval(handle, 1000)
    return (
        <div>
            <h1>{ctime}</h1>
        </div>
    )
}
export default Clocks




// function Clocks() {
//     const[vall,setVall]=useState("")
//   return (
//     <div style={{backgroundColor:vall}}>kiran
//     <input value={vall} type='text' onChange={(e)=>setVall(e.target.value)}/>
//     </div>
//   )
// }

// export default Clocks



// function Clocks() {
//   const [con, setCon] = useState([])
//   const [search, setSearch] = useState("")
//   const[datas,setDatas]=useState([])

//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
//       setCon(res.data)
//       setDatas(res.data)
//       console.log(res.data);
//     })
//   },[])
//   useEffect(() => {
//     let temp = [...datas]
//     temp = temp.filter(item => {
//       let cn = item.title.toLowerCase()
//       if (cn.startsWith(search)) return true
//     })
//     setCon(temp)
//   }, [search])
//   return (

//     <div>
//       <h1>my app</h1>
//       <input value={search} onChange={(e)=>setSearch(e.target.value)}/>
//       {con.map((items) => {
//         return <div>{items.title}  </div>
//       })}</div>
//   )
// }

// export default Clocks

function App() {
    const [btn, setBtn] = useState(true)
  
    return (
      <div className='App'>
  
  <h1>kiran</h1>
  
        <button onClick={() => setBtn(!btn)}>
          {btn ? <span>update
          </span> : <div className='pop'>
            Do you want to save this:<input type='text' placeholder='save' /></div>}
  
        </button>
  
  
      </div>
    )
  }