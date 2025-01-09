import React, { useState } from "react";
import Header from "./components/Header";
import InfoDisplay from "./components/InfoDisplay";
import MapDisplay from "./components/MapDisplay";
import "./styles/global.css";

const App = () => {
  const [ipData, setIpData] = useState(null);

  return (
    <div className="app">
      <Header setIpData={setIpData} />
      {ipData ? (
        <>
          <InfoDisplay ipData={ipData} />
          {/* Pass key prop to force map refresh */}
          <MapDisplay
            key={`${ipData.location?.lat}-${ipData.location?.lng}`}
            lat={ipData.location?.lat}
            lng={ipData.location?.lng}
          />
        </>
      ) : (
        <p>Loading or no data yet</p>
      )}
    </div>
  );
};

export default App;
