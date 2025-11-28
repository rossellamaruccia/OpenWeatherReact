import { Card } from "react-bootstrap"
import WeatherIcon from "./WeatherIcon"

const WeatherCard = (props) => {
    return (
      <>
        <Card>
          <Card.Text>{props.cityInfo.name}</Card.Text>
          <Card.Text>{props.cityInfo.weather[0].main}</Card.Text>
          
        </Card>
      </>
    )
}

export default WeatherCard