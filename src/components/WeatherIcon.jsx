
import { TiWeatherSunny } from "react-icons/ti"

const WeatherIcon = (props) => {
if (props.weather === "sunny") {
        return <TiWeatherSunny />
    }
} 

export default WeatherIcon