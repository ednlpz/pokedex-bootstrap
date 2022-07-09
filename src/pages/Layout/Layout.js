import { Container } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
  return (
    <div style={{backgroundColor: '#f8fafc'}} className='min-vh-100 bg-gray-200'>
      
      <Navbar bg='primary'>
        <Container>
          <Link style={{ textDecoration: 'none' }} to='/'>
            <Navbar.Brand className='text-light'>Pokedex</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>

      <main>
        <Container>{children}</Container>
      </main>
    </div>
  )
}

export default Layout
