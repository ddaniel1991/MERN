import React, {useState} from 'react'
import {  Container } from 'react-bootstrap'
import { FormControl, Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import ReactTagInput from '@pathofdev/react-tag-input'
import { useDispatch} from 'react-redux'
import {createDish} from '../../features/dishes/dishSlice'



const AddFoodItemForm = () => {

    const defaultValues = {
        name: "",
        description: "",
        tags: [],
        ingredients: []
    };

    const [formValues,setFormValues] = useState(defaultValues);
    const [tags, setTags] = useState([])
    const [ingredients,setIngredients] = useState([])
    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });

    };

    const handleTagAddition = (tags) => {
            formValues.tags = tags;
    }
    const handleIngredientAddition = (ingredients) => {
        formValues.ingredients = ingredients;
    }

    const onSubmit = (e) => {
            e.preventDefault()
            dispatch(createDish(formValues))
    }
    

  return (
    <div>
      <Container>
          <Box sx={{
              width: 600,
              maxWidth: '100%',
              mx: 'auto'
          }} >
            <form onSubmit={onSubmit}>
                <h3>Please Complete All Fields</h3>
                
                  <FormControl margin='normal' fullWidth>
                    <h4>Dish Name:</h4>

                    <TextField 
                        variant='outlined'
                        id='dishName' 
                        name='name'
                        label='Name:'
                        placeholder='Enter Text Here' 
                        value={formValues.name}
                        onChange={handleInputChange}
                    />
                  </FormControl>  
                  <FormControl margin='normal' fullWidth>
                    <h4>Description:</h4>
                    <TextField
                        id='description'
                        variant='outlined'
                        name='description'
                        label='Description'
                        placeholder='Enter Text Here'
                        value={formValues.description}
                        onChange={handleInputChange}
                        multiline
                        rows={3}
                    />
                  </FormControl>  
                  <FormControl fullWidth>
                    <h4>Ingredients:</h4>
                    <ReactTagInput 
                        tags={ingredients}
                        value={formValues.ingredients}
                        onChange={ (newIngredients) => setIngredients(newIngredients)}
                        handleaddition={handleIngredientAddition(ingredients)}
                        removeOnBackspace={true}
                        margin='normal'
                    />
                  </FormControl>
                  <FormControl fullWidth>
                    <h4>Flavor Profile:</h4>
                    <ReactTagInput 
                        tags={tags}
                        value={formValues.tags}
                        onChange={ (newTags) => setTags(newTags)}
                        handleaddition={handleTagAddition(tags)}
                        removeOnBackspace={true}
                        margin='normal'
                    />
                  </FormControl>  
                  <FormControl margin='normal'>
                    <Button 
                        variant='contained'
                        color='success'
                        type='submit'
                        onSubmit={onSubmit}
                    > Submit </Button>
                  </FormControl>  
            </form>      
          </Box>
      </Container>
    </div>
  )
}

export default AddFoodItemForm
