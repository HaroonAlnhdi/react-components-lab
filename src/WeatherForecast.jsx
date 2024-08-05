

const Weather = (props) => {
    return (
      <div className="weather">
        <h2>{props.whathe.day}</h2>
        <img src={props.whathe.img} alt="" />
        <p><span>conditions: </span>{props.whathe.conditions}</p>
        <p><span>time: </span>{props.whathe.time}</p>
      </div>
    );
  }
  
  export default Weather;
  