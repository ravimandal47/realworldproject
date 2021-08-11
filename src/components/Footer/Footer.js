import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink to="/" exact>
             Scan It
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/" exact>
              About Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/" exact>
              Blog
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> by{" "}
          <p
          >
            Scan It
          </p>{" "}
          for a better web.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
