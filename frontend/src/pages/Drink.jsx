import React from 'react'
import DrinkTable from '../components/drinks/DrinkTable'
import QuizMeButton from '../components/QuizMeButton'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getDrinks } from '../features/drinks/drinkSlice'
import { reset as dishReset } from '../features/dishes/dishSlice'
import NewDrinkButton from '../components/admin/NewDrinkButton'
import Spinner from '../components/Spinner'

const Drink = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const { drinks, isLoading, isError, isSuccess, message } = useSelector((state) => state.drinks)

  useEffect(() => {
      dispatch(dishReset())
      if(isError) {
          console.log(message);
      }
      if(!user) {
          navigate('/login')
      }
      dispatch(getDrinks(user.token))
      // return () => {
      // dispatch(reset())
      // }

  }, [user, navigate, isError, message, dispatch])
  console.log(drinks);

  if(isLoading) {
    return <Spinner />
  }
    return (

      <div>
        <h2>Menu Items</h2>
        <div className='quiz-me-button' margin='normal'>
          {
            user.admin ? <NewDrinkButton /> : <QuizMeButton />
          }

        </div>
        <div>
        </div>
        <DrinkTable drinks={drinks} />

           
        
      </div>
    )
  
}

export default Drink
