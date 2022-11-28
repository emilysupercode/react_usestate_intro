import "./Input.css";
import React, { useState } from "react";

function ShowInput() {
    const [first, setFirst] = useState("");

    const firstName = event => {
        setFirst(event.target.value);
    }
    const [middle, setMiddle] = useState("");

    const middleName = event => {
        setMiddle(event.target.value);
    }
    const [last, setLast] = useState("");

    const lastName = event => {
        setLast(event.target.value);
    }

    return (
        <section className="showInputSection">
            <h2 className="showInputSectionH2">1_6</h2>
            <input type="text" id="first" onChange={firstName} value={first} />
            <input type="text" id="middle" onChange={middleName} value={middle} />
            <input type="text" id="last" onChange={lastName} value={last} />
            <p>First: {first}</p>
            <p>Middle: {middle}</p>
            <p>Last: {last}</p>
        </section>
    )
}

export default ShowInput;
