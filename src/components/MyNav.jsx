import { Container, Navbar, Nav } from "react-bootstrap"

const MyNav = () => {
    return (
      <>
        <Navbar
          expand="md"
          className="bg-body-secondary mb-3"
          bg="dark"
          data-bs-theme="info"
        >
          <Container fluid>
            <Navbar.Brand href="#">OpenWeather</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Browse</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
}

export default MyNav