import React from "react";
import "../styles/InfoDisplay.css";

const InfoDisplay = ({ ipData }) => (
    <div className="info-display">
        <div>
            <h4>IP Address</h4>
            <p>{ipData.ip}</p>
        </div>
        <div>
            <h4>Location</h4>
            <p>{ipData.location.city}, {ipData.location.region}</p>
        </div>
        <div>
            <h4>Timezone</h4>
            <p>UTC {ipData.location.timezone}</p>
        </div>
        <div>
            <h4>ISP</h4>
            <p>{ipData.isp}</p>
        </div>
    </div>
);

export default InfoDisplay;