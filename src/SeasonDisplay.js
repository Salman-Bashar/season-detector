import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
    summer: {
        text: "Let's go to beach!",
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, so chilly!',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 2 ? 'summer' : 'winter';
    } else {
        return lat > 2 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth());

    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`massive icon-left ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`massive icon-right ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;