import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function Header() {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">نام کاربری</Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link href="#pricing" className="border border-white">
            <Link to="/">
            <button>بازگشت به صفحه ورود</button>
            </Link>
          
            </Nav.Link>
          </Nav>
          <Nav className="me-auto pt-3">
            <div className="input-group mb-3">
              <div className="input-group-prepend mx-2">
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

export default Header;
