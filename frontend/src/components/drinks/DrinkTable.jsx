import React from 'react'
import DrinkTableItem from './DrinkTableItem'
import { Table,TableBody,TableCell,TableContainer,TableHead,TableRow, Paper, Container } from '@mui/material'




function DrinkTable(drinks) {



    console.log({drinks})

    return (
        <Container>

            <TableContainer margin='normal' component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                        <TableCell />
                        <TableCell></TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="left">Add To Quiz</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {drinks.drinks.map((drink) => (
                          <DrinkTableItem key={drink.name} drink={drink} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
  }

export default DrinkTable;
