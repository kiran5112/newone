import React from "react";

export default class Profile extends React.Component {

    constructor() {
        super();
        this.state = {
            NAME: 'BIJARANE',
            count: 10,
            sir:"MAHADEV",
        }

    }
    update() {

        this.setState({
            count: this.state.count + 5,
            NAME:"RANDHAWA",
            sir:"PARWATI"
        })
    }
    render() {
        return (
            <div><h1>sirname::{this.state.NAME}</h1>
                <h3>count::{this.state.count}</h3>
                <h2>GOD::{this.state.sir}</h2>
                <button onClick={() => { this.update() }}>chenge</button>
                <h1>{this.props.text}</h1>
                <h1>{this.props.var}</h1>

            </div>
        )
    }


}

