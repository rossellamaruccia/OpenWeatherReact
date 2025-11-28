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
        <Container fluid>
          <Row className="align-items-center">
            <Col></Col>
            <Col xs={6} md={4} className="text-center">
              <CitySelect changeAppState={changeAppState} />
            </Col>
            <Col xs={6} md={4}>
              <FetchWeather city={city} />
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </>
    )
}

export default HomeContainer