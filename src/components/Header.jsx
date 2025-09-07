import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <Navbar className="bg-dark">
                <Container>
                    <Link to={'/'} style={{ textDecoration: 'none' }} className='p-2'>
                        <Navbar.Brand className="text-white">
                            <i className="fa-solid fa-music"></i>{' '}
                            Media Player
                        </Navbar.Brand>
                    </Link>
                </Container>
            </Navbar>
        </>
    )
}

export default Header