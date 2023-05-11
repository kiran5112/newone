import { useState } from "react";
import React from "react";


function Tipcl() {
    const [subtotal, setSubtotal] = useState(0);
    const [numDiners, setNumDiners] = useState(0);
    const [tipPercentage, setTipPercetnage] = useState(0);
    const [result, setResult] = useState({});
    const submit = (e) => {
        e.preventDefault();
        if (+subtotal <= 0 || +numDiners <= 0 || +tipPercentage <= 0) {
            return;
        }
        const total = +subtotal * (1 + +tipPercentage);
        setResult({ total, totalPerDiner: +total / +numDiners });
    };
    return (
        <div className="App">
            <form onSubmit={submit}>
                <fieldset>
                    <label>subtotal</label>
                    <input
                        value={subtotal}
                        onChange={(e) => setSubtotal(e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <label>number of people sharing the bill</label>
                    <input
                        value={numDiners}
                        onChange={(e) => setNumDiners(e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <label>tip percentage</label>
                    <select
                        value={tipPercentage}
                        onChange={(e) => setTipPercetnage(e.target.value)}
                    >
                        <option value="0">0%</option>
                        <option value="0.05">5%</option>
                        <option value="0.1">10%</option>
                        <option value="0.15">15%</option>
                        <option value="0.2">20%</option>
                    </select>
                </fieldset>
                <button type="submit">Calculate</button>
            </form>
            <p>total: {result.total && result.total.toFixed(2)}</p>
            <p>
                total per diner:{" "}
                {result.totalPerDiner && result.totalPerDiner.toFixed(2)}
            </p>

            
        </div>
    );
}

export default Tipcl;


function Clocks() {
    const [result, setResult] = useState("")


    function click(e) {
        setResult(result.concat(e.target.value))
        
        
    }

    function clear() {
        setResult("")
    }
    function calculet() {
        setResult(eval(result).toString())
    }


    return (
        <div><h1>my calculeter</h1>
            <input placeholder='0' value={result} />
            <input type='button' value="9" onClick={click} />
            <input type='button' value="8" onClick={click} />
            <input type='button' value="7" onClick={click} />
            <input type='button' value="6" onClick={click} />
            <input type='button' value="5" onClick={click} />
            <input type='button' value="4" onClick={click} />
            <input type='button' value="3" onClick={click} />
            <input type='button' value="2" onClick={click} />
            <input type='button' value="1" onClick={click} />
            <input type='button' value="0" onClick={click} />
            <input type='button' value="+" onClick={click} />
            <input type='button' value="-" onClick={click} />
            <input type='button' value="/" onClick={click} />
            <input type='button' value="*" onClick={click} />
            <input type='button' value="." onClick={click} />
            <input type='button' value="clear" onClick={clear} />
            <input type='button' value="=" onClick={calculet} />
            {/* <input type='button' value="back" onClick={popp} /> */}


        </div>
    )
}

// export default Clocks;


