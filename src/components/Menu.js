import Container from 'react-bootstrap/Container';
import Cookies from 'universal-cookie';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
    const cookies = new Cookies();
    const userRole = cookies.get('Fk_User_Role')


    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Menu</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        {userRole === "1" ? <Nav.Link href="/admin">Admin</Nav.Link> : <></>}
                        {userRole === "2" ? <Nav.Link href="/dashboard">Dashboard</Nav.Link> : <></>}
                        
                        <Nav.Link href="/showAllUsers">Show All Users</Nav.Link>
                    </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as {userRole === "1" ? "Admin" : "General User"}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Menu;