import React from 'react'
import food from '../img/dish.jpg'
import pair from '../img/pair.jpg'
import cocktail from '../img/cocktail.jpg'
import { Card, Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Sections = () => {
  return (

    <Container >
        <div>
            <Row>
                <Col md>
                    <Link to="/food">
                        <Card>
                        <Card.Img src={food} height={300} width={100} />
                        <Card.Body>
                            <Card.Title className=''>Food</Card.Title>
                        </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col md>
                    <Link to="/drinks">
                        <Card>
                        <Card.Img src={cocktail} height={300} width={300} />
                        <Card.Body>
                            <Card.Title>Drinks</Card.Title>
                        </Card.Body>
                        </Card>
                    </Link>

                </Col>
                <Col md>
                    <Link to="/pairings">
                        <Card>
                        <Card.Img src={pair} height={300} width={300} />
                        <Card.Body>
                            <Card.Title>Pairings</Card.Title>
                        </Card.Body>
                        </Card>
                    </Link>
                </Col>
            </Row>

       
        </div>
    </Container>
  )
}

export default Sections
