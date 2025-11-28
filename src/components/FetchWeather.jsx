import { Card } from "react-bootstrap"
import { Component } from "react"
import WeatherCard from "./WeatherCard"

class FetchWeather extends Component {
  state = {
    info: {
      name: "Palermo",
      weather: [
        {
          description: "",
          icon: "01d",
          id: 800,
          main: "",
        },
      ],
      main: {
        feels_like: 11.24,
        grnd_level: 1008,
        humidity: 45,
        pressure: 1012,
        sea_level: 1012,
        temp: 12.74,
        temp_max: 13.34,
        temp_min: 12.29,
      },
    },
  }

  WeatherData = () => {
    const Url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      this.props.city +
      "&appid=5fb43d9317a963bf83907952a8a8a3f3&units=metric"

    fetch(Url)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("errore nella chiamata")
        }
      })
      .then((data) => {
        console.log(data)
        this.setState({
          info: data,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidUpdate(prevProps) {
    if (this.props.city !== prevProps.city) {
      this.WeatherData()
    }
  }

  render() {
    return <WeatherCard cityInfo={this.state.info} />
  }
}

export default FetchWeather
