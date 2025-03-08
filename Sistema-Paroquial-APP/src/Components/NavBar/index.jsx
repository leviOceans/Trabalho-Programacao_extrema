import * as S from "./style"; //Importando conteúdo do styled component
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavbarMenu() {

  return (
    <S.NavbarWrapper>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navbar-links">
              <Link to="/" className="nav-item">
                <Nav.Item>Home</Nav.Item>
              </Link>
              
              <NavDropdown title="Padre" id="basic-nav-dropdown">
                <Link to="/cadastro-padre">
                  <NavDropdown.Item as={"div"}>Cadastro</NavDropdown.Item>
                </Link>
              </NavDropdown>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </S.NavbarWrapper>
  );
}
