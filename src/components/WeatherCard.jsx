import { Card } from "react-bootstrap"

const WeatherCard = (props) => {
 
  return (
    <>
      <Card>
        {props.cityInfo.weather[0].icon === "04d" ? (
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1603437873662-dc1f44901825?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        ) : (
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1622278647429-71bc97e904e8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        )}
        <Card.Body>
          <Card.Text>{props.cityInfo.name}</Card.Text>
          <Card.Text>temperatura media: {props.cityInfo.main.temp}°</Card.Text>
          <Card.Text>
            minima: {props.cityInfo.main.temp_min}° - massima:{" "}
            {props.cityInfo.main.temp_max}°
          </Card.Text>
          <Card.Text>{props.cityInfo.weather[0].main}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )

}

export default WeatherCard