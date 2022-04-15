import React from 'react'
import { Container, Button } from '@mui/material'

const NewDrinkButton = () => {
  return (
    <div>
        <Container align='right'>
            <Button href="/drinks/add" variant='contained' color='success'>New Drink</Button>
        </Container>
    </div>
  )
}

export default NewDrinkButton
