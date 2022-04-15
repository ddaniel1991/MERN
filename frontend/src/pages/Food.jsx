import React from 'react'
import FoodTable from '../components/FoodTable'
import QuizMeButton from '../components/QuizMeButton'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getDishes, reset } from '../features/dishes/dishSlice'
import AddNewButton from '../components/admin/AddNewButton'
import Spinner from '../components/Spinner'

const Food = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const { dishes, isLoading, isError, isSuccess, message } = useSelector((state) => state.dishes)

  useEffect(() => {
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
          <AddNewButton />

        </div>
        <div>
        </div>
        <FoodTable dishes={dishes} />

           
        
      </div>
    )
  
}

export default Food
