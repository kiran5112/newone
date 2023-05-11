import React, { useRef } from "react";

function Input() {
    let inp = useRef(null)
    let inp2 = useRef(null)
    let inp3 = useRef(null)
    function sfm(e) {
        e.preventDefault()
        console.log("input value1 ", inp.current.value)
        console.log("input value2 ", inp2.current.value);
        console.log("my value:", inp3.current.value);
    }
    function Color(){
        inp.current.value="1000"
        inp2.current.style.color='red'
    }

    return (
        <div>
            <form onSubmit={sfm}>
                <fieldset>
                <h1>MY FORM</h1>
                <input ref={inp} type='text' /> <br></br>
                <input ref={inp2} type="text" /> <br></br>
                <input ref={inp3} type="checkbox" />:<span>Turms and condition apply</span> <br></br>
                <button onClick={Color}>SUBMEET2</button>
                </fieldset>
            </form>

        </div>
    )
};
export default Input;
