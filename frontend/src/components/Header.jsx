import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { Container } from '@mui/material'


const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }


  return (
    
    <div>
      <header className='header'>
        <div className="logo">
            <Link to='/'>
                MenuTrainer
            </Link>
        </div>
        <ul>
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/dishes/'>
              Dishes
            </Link>
          </li>
          <li>
            <Link to='/drinks/'>
              Drinks
            </Link>
          </li>
          <li>
            <Link to='/pairings/'>
              Pairings
            </Link>
          </li>
          <li>
            <Link to='/quiz'>
              Quiz
            </Link>
          </li>
        </ul>
        <ul>
          {user ? (         
          <li>
              <button className='btn' onClick={onLogout}>
                  <FaSignOutAlt />Logout
              </button>
          </li> 
          ) : (
          <> 
              <li>
                <Link to='/login'>
                    <FaSignInAlt />Login
                </Link>
              </li>   
              <li>
                <Link to='/register'>
                    <FaUser />Register
                </Link>
              </li>
          </>)
          }
                
            </ul>
      </header>
    </div>
  )
}

export default Header
