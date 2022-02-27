import { Navbar } from "react-bootstrap"
import { Container } from "react-bootstrap"
// import { Row } from "react-bootstrap"
// import { Col } from "react-bootstrap"
import { Nav } from "react-bootstrap"
// import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse"
import logo from '../../assets/Images/logo_website.png'
import { styles } from './HeaderStyle'
export default function Header() {
    return (
        <Navbar bg="white" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img src={logo}></img>&nbsp;&nbsp;&nbsp;<text style={styles.logoText}>TheBox</text></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="text-center justify-content-end">
                    <Nav>
                        <Nav.Link style={styles.home} href="#home">Home</Nav.Link> 
                        <Nav.Link style={styles.aboutUs} href="#link">About Us</Nav.Link>
                        <Nav.Link style={styles.projects} href="#link">Projects</Nav.Link>
                        <Nav.Link style={styles.services} href="#link">Services</Nav.Link>
                        <Nav.Link style={styles.contactUs} href="#link">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}