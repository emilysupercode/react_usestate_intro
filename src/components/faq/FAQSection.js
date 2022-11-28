import "./FAQSection.css";
import SingleQuestion from "./SingleQuestion";
import React, { useState } from "react";

const FAQarray = [
    {
        q: "Why is React the greatest thing?",
        a: "Because it's so easy to learn without previous coding experience"
    },
    {
        q: "Why did the chicken cross the road?",
        a: "There was coffee on the other side"
    },
]

function FAQSection() {
    return (
        <div>
            <h2>1_2, Frequently Asked Questions</h2>
            <section>
                <SingleQuestion />
            </section>
        </div>
    )
}

export default FAQSection;