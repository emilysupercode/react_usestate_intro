import React, { useState } from "react";
import "./SingleQuestion.css";

const SingleQuestion = () => {
    const [expanded, setExpanded] = useState(false);
    return (
        <section className="FAQSection">
            <div className="FAQdisplayQuestion">
                <p className="boldP" onClick={() => setExpanded(!expanded)}>Why is React the greatest thing?</p>
                <button className="openCloseDropDownButton" onClick={() => setExpanded(!expanded)}>{expanded ? "-" : "+"}</button>
            </div>
            {expanded && <p className="regularP">Because it's so easy to learn without previous coding experience</p>}
        </section>
    )
}

export default SingleQuestion;