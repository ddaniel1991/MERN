// Services are generally used for making the http request, and sending the data back
// and setting any data in local storage

//axios is a depency that enables this
import axios from 'axios'

const API_URL = '/api/dishes/'


const getDishes = async (token) =>  {
    const response = await axios.get(API_URL, {token})
    return response.data

}

// create new dish
const createDish = async (dishData, token) =>  {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, dishData, config)

    return response.data

}

const updateDish = () => {

}

const deleteDish = () => {

}

const displayDish = () => {

}


export const  dishService = {
    createDish, 
    getDishes,
    updateDish,
    deleteDish,
    displayDish
}

export default dishService