
// import React, { useContext } from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';
// import PractStyle from "./Practice.module.css"


// function Practice() {
//     const [todo, setTodo] = useState([])
//     const [num, setNum] = useState(1)
//     console.log(todo);
//     useEffect(() => {

//         axios.get(`https://jsonplaceholder.typicode.com/users/${num}`)
//             .then(res => setTodo(res.data.name))


//     }, [num])

//     return (
//         <div>
//             {todo}
//             <button onClick={() => setNum(num+1)}>adddd</button>
//             {/* {
//                 todo.map((todos) => {
//                     return (
//                         <div> <ul><input type="checkbox"/>{todos.email} </ul></div>
//                     )
//                 }) */}
//             {/* } */}
//         </div>
//     )
// }


// function Practice() {
//     const [todo, setTodo] = useState([])
//     console.log(todo);
//     useEffect(() => {
//         axios.get("https://jsonplaceholder.typicode.com/todos")
//             .then(res => setTodo(res.data))
//     }, [])
//     return (
//         <div>

//             {
//                 todo.map(item => {
//                     return (
//                     <div className="main">


//                         <input type="checkbox"/>{item.title}</div>
//                     )
//                 })
//             }
//         </div>
//     )
// }
// export default Practice;




function Practice() {
    const [countries, setCountries] = useState([]);
    const [accending, setAccending] = useState(true)
    const [search, setSearch] = useState()
    const [data, setData] = useState([])



    useEffect(() => {

        axios.get("https://restcountries.com/v3.1/all")
            .then(res => {
                setCountries(res.data)
                setData(res.data)
            })
    }, [])

    function Sorter() {
        let temp = [...countries]
        if (accending) {
            temp.sort((a, b) => {
                return a.population - b.population
            })
        } else {
            temp.sort((a, b) => {
                return b.population - a.population
            })
        }
        setAccending(!accending)
        setCountries(temp)
    }


    useEffect(() => {
        let temp = [...data];
        temp = temp.filter(item => {
            let countryName = item.name.common.toLowerCase();
            if (countryName.startsWith(search)) return true

        })
        setCountries(temp)
    }, [search])
    function hook(index) {
        let y = [...countries]
        y.splice(index, 1)
        setCountries(y)
    }
    return (
        <div>
            <table >
                <input type='search' onChange={(e) => setSearch(e.target.value)} />
                <button onClick={() => hook(index)}>delite</button>
                <tr>
                    <th>countries</th>
                    <th>CAPITAL</th>
                    <th onClick={Sorter}>POPULATION</th>
                </tr>
                {
                    countries.map((item, index) => {
                        return (

                            <tr key={index}>
                                <td>{item.name.common}</td>
                                <button onClick={() => hook(index)}>delite</button>
                                <td>{item.capital}</td>
                                <td>{item.population}</td>
                            </tr>
                        )
                    })


                }

            </table>
        </div>
    )
}

export default Practice;



//




// function Practice() {

//     const [colors, setColors] = useState(['red', 'green', 'blue','yellow']);

//     function addBlock(color) {

//         let temp = [...colors];

//         temp.push(color);

//         setColors(temp);

//     }

//     return (

//         <div className='App'>
//             <h1>good morning</h1>
//             <div className='buttons'>
//                 <button className='r' onClick={() => addBlock('red')}>+</button>
//                 <button className='g' onClick={() => addBlock('green')}>+</button>
//                 <button className='b' onClick={() => addBlock('blue')}>+</button>
//                 <button className="y" onClick={()=>addBlock('yellow')}>+</button>
//             </div>
//             <hr />
//             {

//                 colors.map(data => {

//                     return (

//                         <div style={{ backgroundColor: data }} className='box'>kiran</div>
//                     )

//                 })

//             }

//         </div>
//     )

// }

// export default Practice;

// function Practice() {
//     const [color, setColor] = useState(['red', 'pink', 'blue', 'yellow', 'green', 'orange', 'silver', 'teal',
//         'purple', 'navy', 'aqua', 'fuchsia', 'black', 'grey'])
//     const [datas, setdatas] = useState([])
//     const [col, setCol] = useState("")
//     useEffect(() => {
//         axios.get("https://run.mocky.io/v3/288760fc-f055-4bf7-bcb1-bda5157bfef3").then(res => setdatas(res.data))


//     }, [])
//     console.log(datas);
//     function add(popp) {
//         let arr = [...color]
//         // let arr1 =['red','pink','blue']
//         arr.pop(popp)

//         setColor(arr)
//     }
//     useEffect(() => {


//         setInterval(() => {
//             document.body.style.backgroundColor = color
//         }, 1000)
//     })
//     function add1(lop) {
//         let arr1 = [...color]
//         arr1.push(lop)
//         setColor(arr1)
//     }
//     return (
//         <div className="color" >
//             <button onClick={() => add("pink")}>+</button>
//             <button onClick={() => add1("black")}>++</button>

//             <div style={{ backgroundColor: col, height: "400px", width: "500px" }}>  <input onChange={(e) => setCol(e.target.value)} value={col} type='text' placeholder="ENTER YOUR FEV COLOR" /></div>

//             {
//                 color.map((data) => {
//                     return <div style={{ backgroundColor: data, height: 100, width: 100 }} className="col" ></div>


//                 })

//             }



//         </div>
//     )
// };

// function Practice(){
//     const[col,setCol]=useState("")
//     return(
//         <div style={{backgroundColor:col,height:"100px"}}>😊😊😊😊😊😊😊😊
//             <input type="text" value={col} onChange={(e)=>setCol(e.target.value)}/>
//         </div>
//     )
// }

// function Practice() {
//     const [datas, setdatas] = useState([])
//     useEffect(() => {
//         axios.get("https://run.mocky.io/v3/288760fc-f055-4bf7-bcb1-bda5157bfef3").then(res => setdatas(res.data))


//     }, [])
// console.log(datas);

//     return (

//         <div>


//             <h4>kiran here</h4>
//             {
//                 datas.filter(item => {
//                     return <li>{item.lenghth-1}</li>
//                 })
//             }
//         </div>
//     )
// }




// export default Practice;

// my cart real world project

function App() {
  const [product, setProduct] = useState([])
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      // console.log(res.data.products);
      // setProduct(res.data.products)
      let myv = res.data.products
      myv.forEach(products => {
        products.count = 0
      })
      setProduct(myv)
    })
  }, [])

  function increament(index) {
    let temp = [...product]
    temp[index].count = temp[index].count + 1
    setProduct(temp)
  }

  function decreament(index) {
    let temp = [...product]
    if (temp[index].count > 0) {
      temp[index].count = temp[index].count - 1
    }
    setProduct(temp)
  }


  return (
    <div>



      <Header  items={product}/>
      <Products items={product} increament={increament} decreament={decreament}  />


    </div>
  )
}

// export default App






function App() {
  const [product, setProduct] = useState([])
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      console.log(res.data.products);
      setProduct(res.data.products)
      let myarr = res.data.products
      myarr.forEach((ele) => {
        ele.count = 0;
      })
      setProduct(myarr)
    })
  }, [])
  let sum = 0;
  product.forEach((ele) => {
    sum = sum + ele.count
  })

  function add(index) {
    let temp = [...product]
    temp[index].count = temp[index].count + 1;
    setProduct(temp)
  }
  function sub(index) {
    let temp = [...product]
    if (temp[index].count > 0) {
      temp[index].count = temp[index].count - 1
    }
    setProduct(temp)
  }


  function dele(index) {
    let dol = [...product]
    dol.splice(index,1)
    setProduct(d)
  }
  return (
    <div>App
      <h1 className='crt'>🛒cart={sum}</h1>
      {
        product.map((item, index) => {
          return <div key={index}>{item.title} {item.count}
            <button onClick={() => add(index)}>+</button>
            <button onClick={() => sub(index)}>-</button>
            {/* <button onClick={() => dele(index)}>delet</button> */}
          </div>
        })
      }
    </div>
  )
}



// export default App






