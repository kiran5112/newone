import React, { useContext } from 'react'

const Header = ({items}) => {
let sum =0;
items.forEach(ele=>{
  sum= sum+ele.count;
})

  return (
    <div className='header'>
        <div className='count'>{sum}</div>
    {/* <h1 className='crt'>🛒</h1> */}
    <marquee direction="right">    <h1 className='crt'>🛒</h1></marquee>
    {/* <h4 className='text-center'>Shopping App</h4> */}
    </div>
  )
}

export default Header





