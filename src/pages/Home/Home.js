import { Image } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Layout from '../Layout/Layout'

const Home = () => {
  const navigate = useNavigate()
  return (
    <Layout>
      <div className='w-100 d-flex flex-column justify-content-center py-4'>
        <Row>
          <Col>
            <h1 className='fs-1 fw-bolder'>Pokedex</h1>
            <p className='fs-4'>
              A project built with react, react-router and bootstrap
            </p>
            <Button onClick={() => navigate('/1')} variant='primary'>
              Get Started
            </Button>
          </Col>
          <Col className='d-flex flex-column align-items-center'>
            <a
              href='https://pokeapi.co'
              className='text-dark text-decoration-none text-center'
            >
              <Image fluid={true} src='/pokeapilogo.png'></Image>
              <p className='fs-4'>API from PokeAPI.co</p>
            </a>
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default Home
