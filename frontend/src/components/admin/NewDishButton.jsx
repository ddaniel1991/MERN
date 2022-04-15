import React from 'react'
import { Container, Button } from '@mui/material'

const NewDishButton = () => {
  return (
    <div>
        <Container align='right'>
            <Button href="/dishes/add" variant='contained' color='success'>New Dish</Button>
        </Container>
    </div>
  )
}

export default NewDishButton
