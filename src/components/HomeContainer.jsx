import { Container, Row, Col } from "react-bootstrap"
import FetchWeather from "./FetchWeather"
import CitySelect from "./CitySelect"

import { useState } from "react"


const HomeContainer = () => {

  const [city, setCity] = useState("Palermo")
  
  const changeAppState = (value) => {
    setCity(value)
  }
    return (
      <>
        <Container fluid className="bg-body-tertiary">
          <Row>
            <Col>
              <CitySelect changeAppState={changeAppState}/>
              <FetchWeather city={city}/>
            </Col>
          </Row>
        </Container>
      </>
    )
}

export default HomeContainer