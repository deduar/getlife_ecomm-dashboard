import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom'

function Header() {
    let user = JSON.parse(localStorage.getItem('user-info'));
    const history = useHistory();
    function logOut(){
        localStorage.clear();
        history.push('/register');
    }    
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">E-Comm</Navbar.Brand>
                <Nav className="mr-auto navbar_wrapper">
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Link to="/">Products List</Link>
                                <Link to="/add">Add products</Link>
                                <Link to="/update">Update products</Link>
                            </>
                            :
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </>
                    }
                </Nav>
                { localStorage.getItem('user-info') ?
                <Nav>
                    <NavDropdown title={user && user.name}>
                        <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                :null
                }
            </Navbar>
        </div>
    )
}

export default Header