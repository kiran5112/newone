import axios from 'axios'
import React, { useEffect, useState } from 'react'

// function Axios() {
//     const [info, setInfo] = useState([])
//     const [good, setGood] = useState(-1)
//     useEffect(() => {
//         axios.get("https://finnhub.io/api/v1/covid19/us?token=cgv4q51r01qlt23ieef0cgv4q51r01qlt23ieefg").then((res) => {
//             setInfo(res.data);
//             console.log(res.data);
//         })
//     }, [])
//     function handle(index) {
//         setGood(index)
//     }
//     return (
//         <div>
//             {
//                 info.map((item,index) => {
//                     return <div key={index} onClick={() => handle(index)}>
//                         {index === good ? item.state : item.updated}
//                     </div>
//                 })
//             }
//         </div>
//     )
// }

// export default Axios


// function Axios() {
//     const [datas, setDatas] = useState([])
//     const [car, setCar] = useState(-1)
//     useEffect(() => {
//         axios.get("https://jsonplaceholder.typicode.com/albums").then((res) => {
//             setDatas(res.data)
//             console.log(res.data);
//         })
//     }, [])
//     function handle(index) {
//         setCar(index)
//         alert("covid case")
//     }
//     return (
//         <div>
//             {
//                 datas.map((item, index) => {
//                     return <div className='child' key={index}
//                         onClick={() => { handle(index) }}>
//                         {index === car ? item.title : item.id}
//                     </div>

//                 })
//             }


//         </div>
//     )
// }

// export default Axios

function Axios() {
    const [col, setCol] = useState([])
    const [datas, setDatas] = useState('')
    const [edi, setEdi] = useState("")

    function Get() {
        axios.post("https://jsonplaceholder.typicode.com/posts", {
            datas
        }).then(res => console.log("data is posting", res))
        // setDatas("")
    }

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => setCol(res.data))
    }, [])

    function del(index) {
        let h = [...col]
        h.splice(index, 1)
        setCol(h)
    }
    function sen(index) {
        setEdi(index)
    }
    return (
        <>
            <input value={datas} onChange={(e) => setDatas(e.target.value)}
                type="text" />
            <button onClick={Get}>add</button>
            {
                col.map((item, index) => {
                    return <li key={index}>{item.title} --------{datas}
                        <button onClick={() => del(index)}>delete</button>
                        <button onClick={() => sen(index)}>edite</button>
                        {
                            edi === index ? <input/> : item.title
                        }
                    </li>

                })
            }




        </>
    )
};
// export default Axios;


function Axios() {
    const[d,setD]=useState("")
    const[num,setNum]=useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${num}`).then((res)=>{
            console.log(res);
            setD(res.data.title)

        })
    },[num])
  return (
    <div>
      {d}
      <button onClick={()=>setNum(num+1)}>next</button>
    </div>
  )
}

export default Axios

