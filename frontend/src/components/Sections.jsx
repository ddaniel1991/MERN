import React from 'react'
import food from '../img/dish.jpg'
import pair from '../img/pair.jpg'
import cocktail from '../img/cocktail.jpg'
import { Card, Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Sections = () => {
    const cardSize = 300
  return (

    <Container >
        <div>
            <Row>
                <Col md>
                    <Link to="/dishes">
                        <Card>
                        <Card.Img src={food} height={cardSize} width={cardSize} />
                        <Card.Body>
                            <Card.Title className=''>Dishes</Card.Title>
                        </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col md>
                    <Link to="/drinks">
                        <Card>
                        <Card.Img src={cocktail} height={cardSize} width={cardSize} />
                        <Card.Body>
                            <Card.Title>Drinks</Card.Title>
                        </Card.Body>
                        </Card>
                    </Link>

                </Col>
                <Col md>
                    <Link to="/pairings">
                        <Card>
                        <Card.Img src={pair} height={cardSize} width={cardSize} />
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
