import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function HomePage() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">نام کاربری</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="border border-white">
              محصول یک
            </Nav.Link>
            <Nav.Link href="#features" className="border border-white mx-2">
              محصول دو
            </Nav.Link>
            <Nav.Link href="#pricing" className="border border-white">
              محصول سه
            </Nav.Link>
          </Nav>
          <Nav className="me-auto pt-3">
            <label for="basic-url">Your vanity URL</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend mx-2">
                <button  className="input-group-text" id="basic-addon3">
                  جستوجو کنید
                </button>
              </div>
              <input
                type="text"
                className="form-control bg-secondary bg-secondary-10 border-0 rounded-2"
                id="basic-url"
                aria-describedby="basic-addon3"
              />
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default HomePage;
