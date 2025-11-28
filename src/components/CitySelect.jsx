import cities from "../../public/cities.json"
import { Form } from "react-bootstrap"


const CitySelect = (props) => {
  return (
    <>
          <Form className="w-50">
            <Form.Group>
              <Form.Label>Seleziona la tua città</Form.Label>
              <Form.Select
                onChange={(e) => {
                  props.changeAppState(e.target.value)
                }}
              >
                {cities.map((city) => {
                  return <option key={city.asin} value={city.city}>{city.city}</option>
                })}
              </Form.Select>
            </Form.Group>
          </Form>
    </>
  )
}

export default CitySelect
