import "./DayNight.css";
import React, { useState } from "react";

function DayNightSwitch() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(current => !current)
    }
    return (
        <section className="DayNightSection">
            <div className={isActive ? "nightSettings" : "daySettings"}>
                <p className="DayNightP">1_3</p>
                <p className="DayNightP">{isActive ? "good night, world 🌝" : "good morning, world 🌞"}</p>
                <button className="DayNightButton" onClick={handleClick}>{isActive ? "Switch to Day Mode" : "Switch to Night Mode"}</button>
            </div>
        </section>)
}

export default DayNightSwitch;