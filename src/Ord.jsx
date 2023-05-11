import React, { useRef, useState } from "react";

function Ord() {

    return (
        <div><h1>HIGH ORDER COMPONANTS</h1>
            <Wraper cmp={Hoc} />
            <Wra cmp={Hoc} />
            <Wood cmp={Hoc} />
            <Style item={Test} />
            <Soof item={Test} />
            <Xoom item={Test} />

        </div>
    )
};

export default Ord;

function Wraper(props) {
    return (
        <div>
            <h2 style={{ backgroundColor: 'red', width: 500, color: 'black', fontSize: 50 }}> kiran Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Ad, inventore? Voluptatibus, magnam voluptatum laborum asperiores nobis dignissimos. Doloremque autem voluptas aliquam doloribus
                magni, <mark>kiran madam</mark>impedit alias illo cupiditate molestias cumque aliquid.<button onClick={() => alert("kiran is osam")}>add</button> <props.cmp /></h2>
            <marquee dirction="right">hay i did it</marquee>
        </div>
    )
}
function Wood(props) {
    return (
        <div>
            <h2 style={{ backgroundColor: 'yellow', width: 100 }}><props.cmp /></h2>
        </div>
    )
}
function Wra(props) {
    return (
        <div>
            <h2 style={{ backgroundColor: 'green', width: 100 }}> <props.cmp /></h2>
        </div>
    )
}

function Hoc() {
    const [god, setgod] = useState(0)
    return (
        <div>
            <h5>hellow</h5>
            {/* <h2>{god}</h2> */}
            <button onClick={() => setgod(god + 1)}>update{god}me</button>
        </div>
    )
};
function Style(props) {
    return (
        <h1 style={{ fontSize: 50, color: 'pink' }}> <props.item /></h1>
    )
}
function Soof(props) {
    return (
        <div>
            <h1 style={{ backgroundColor: 'royalblue', color: 'pink' }}><props.item /></h1>
        </div>
    )
}
function Xoom(props) {
     
    
    return (
        <div>
            <h1 style={{ backgroundColor: 'yellow',color:'red' }}>
                <input  type="test"/>
                <button onClick={()=>alert("have a good day")}>click me</button>
                
                <props.item /></h1>
        </div>
    )
}
function Test() {
    return (
        <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id nisi sed ipsam in
                soluta<strong>earum doloremque illo aliquid minima dicta, aliquam doloribus
                    atque consectetur provident voluptatum saepe </strong>trveritatis. Consequatur, voluptatem.</p>
        </div>
    )
}

