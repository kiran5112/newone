import React from "react";
import './App.css'
function Comp() {

    return (
        <div>
            <h1>kiran is the best</h1>
            <Test item={"goooood name"}>
                <h1>kunal</h1>
                <p class="main">lorem i am so gret so i ciol we arew have a nice day so make it bveutibf</p>
                <ul class='rol'>
                    {/* <a href='#'>MANGO</a> */}
                    <li> BANAN</li>
                    <li> CHOCKLET</li>
                    <li> CREAM</li>
                    <li>MILK</li>
                </ul>
                <a href='Home.jsx'>MANGO</a>
            </Test>
            <get/>
        </div>
    )
};
export default Comp;

function Test(props) {

    return (
        <div>
            <h2> aachal is also best{props.item}</h2>
            {props.children}
        </div>
    )
}

function get(){
    return(
        <div class='main'>
<h1>my hobby</h1>
        </div>
    )
}