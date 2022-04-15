import React from 'react'
import FoodTable from '../components/dishes/FoodTable'
import QuizMeButton from '../components/QuizMeButton'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getDishes } from '../features/dishes/dishSlice'
import NewDishButton from '../components/admin/NewDishButton'
import { reset as drinkReset } from '../features/drinks/drinkSlice'
import Spinner from '../components/Spinner'

const Food = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const { dishes, isLoading, isError, isSuccess, message } = useSelector((state) => state.dishes)

  useEffect(() => {
      dispatch(drinkReset())
      if(isError) {
          console.log(message);
      }
      if(!user) {
          navigate('/login')
      }
      dispatch(getDishes(user.token))
      // return () => {
      // dispatch(reset())
      // }

  }, [user, navigate, isError, message, dispatch])
  console.log(dishes);

  if(isLoading) {
    return <Spinner />
  }
    return (

      <div>
        <h2>Menu Items</h2>
        <div className='quiz-me-button' margin='normal'>
          {
            user.admin ? <NewDishButton /> : <QuizMeButton />
          }

        </div>
        <div>
        </div>
        <FoodTable dishes={dishes} />

           
        
      </div>
    )
  
}

export default Food
