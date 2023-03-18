import './navbar.css'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import { faOutdent } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function NavbarComponent() {
    return (
        <Navbar bg='light' expand="lg" className='nav p-3'>
            <Navbar.Brand><FontAwesomeIcon icon={ faShoppingCart} size='2x'/> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link><h4 className='item'>Filmes</h4></Nav.Link>
                    <Nav.Link><h4 className='item'>Eventos</h4></Nav.Link>
                    <Nav.Link><h4 className='item'>Sobre</h4></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <NavDropdown className='item' title="Meu pefil" id="basic-nav-dropdown">
                <NavDropdown.Item> <FontAwesomeIcon icon={faUserCircle} /> Meus dados</NavDropdown.Item>
                <NavDropdown.Item> <FontAwesomeIcon icon={faTicketAlt}/> Meus Ingressos </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item> <FontAwesomeIcon icon={faOutdent}/> Sair</NavDropdown.Item>
            </NavDropdown>
            <Navbar.Brand>
                
            </Navbar.Brand>
        </Navbar>
    );
}