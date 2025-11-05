import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoSvg from '../assets/mySparkleHeartSvg.svg';


export default function NavigationBar() {
    return (
        <Navbar expand="lg" className="nav-custom">
            <Navbar.Brand href="#home">
                <img
                    src={logoSvg}
                    alt="My Sparkle Heart"
                    height="300"      // adjust size as needed
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto nav-item-container">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
