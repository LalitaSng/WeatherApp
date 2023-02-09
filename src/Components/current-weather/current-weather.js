import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Belgrade</p>
          <p className="weather-Description">Sunny</p>
        </div>
        <img alt="weather" className="weather-icon" src="icons/01d.png" />
      </div>
      <div className="bottom">
        <p className="temperature">18°C </p>
        <div className="details">
            <div className="parameter-row">
                <span className="parameter-label">Details</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">feels like</span>
                <span className="parameter-value">22</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">wind</span>
                <span className="parameter-value">2m/s</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">humidity</span>
                <span className="parameter-value">15%</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">pressure</span>
                <span className="parameter-value">15 hpa</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
