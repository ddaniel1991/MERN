import React from 'react'
import { Container, Button } from '@mui/material'

const AddNewButton = () => {
  return (
    <div>
        <Container align='right'>
            <Button href="/dishes/add" variant='contained' color='success'>Add New</Button>
        </Container>
    </div>
  )
}

export default AddNewButton
