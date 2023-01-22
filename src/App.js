import './assets/style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from './context/userContext';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { API, setAuthToken } from './config/api';

import HomePage from './pages/HomePage';
import DetailBookPage from './pages/DetailBookPage';
import ProfilePage from './pages/ProfilePage';
import AddBookPage from './pages/AddBookPage';
import IncomeAdminPage from './pages/IncomeAdminPage';
import MyCartPage from './pages/MyCartPage';

function App() {

  const navigate = useNavigate()
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }
  const [state, dispatch] = useContext(UserContext)

  useEffect(() => {
    if (state.isLogin === false) {
      navigate('/');
    } else {
      if (state.user.status === 'admin') {
        navigate('/');
      } else if (state.user.status === 'user') {
        navigate('/');
      }
    }
  }, [state]);


  const checkUser = async () => {
    try {
      const response = await API.get('/check-auth')

      if (response.status === 404) {
        return dispatch({
          type: 'AUTH_ERROR',
        })
      }

      let payload = response.data.data
      payload.token = localStorage.token

      dispatch({
        type: 'USER_SUCCESS',
        payload,
      })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkUser()
  }, [])

  return (
    <>

      <Routes>
        <Route exacth path="/" element={< HomePage />} />
        <Route exacth path="/profile" element={< ProfilePage />} />
        <Route exacth path="/cart" element={< MyCartPage />} />
        <Route exacth path="/detail/:id" element={< DetailBookPage />} />
        <Route exacth path="/add-book" element={< AddBookPage />} />
        <Route exacth path="/income" element={< IncomeAdminPage />} />
      </Routes>
    </>
  );
}

export default App;
