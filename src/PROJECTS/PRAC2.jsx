import axios from 'axios'
import React, { useEffect, useState } from 'react'

function PRAC2() {
  const [size, setSize] = useState("")
  const [product, setProduct] = useState([])
  const [asen, setAsen] = useState(true)
  const[search,setSearch]=useState()

  useEffect(() => {
    axios.get("https://dummyjson.com/carts").then((res) => {
      setProduct(res.data.carts)
      console.log(res.data.carts);
    })
  }, [])
  useEffect(()=>{
let t = [...product]
t.filter((ele)=>{
 let a = ele.total.toLowerCase()
 if(a.StartsWith(search)) return true
})
setProduct(t)
  },[search])

  function sorter() {
    let temp = [...product]
    if (asen) {
      temp.sort((a, b) => {
        return a.total - b.total
      })
    } else {
      temp.sort((a, b) => {
        return b.total - a.total
      })
    }
      setAsen(!asen)
      setProduct(temp)
    }

    return (
      <div style={{ fontSize: size, backgroundColor: size, border: size }}>
        <input style={{ width: '100px', height: "50px" }} value={size} onChange={(e) => setSize(e.target.value)} />kirann Lorem

        <button onClick={sorter}>click</button>
        <input type='search' onChange={(e)=>setSearch(e.target.value)}/>
        {
          product.map((item) => {
            return <div>{item.total} {item.userid}</div>
          })
        }

      </div>
    )
  }

  export default PRAC2