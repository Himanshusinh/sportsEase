import Signuppage from './AuthanticationPages/Signuppage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import StartPage from './AuthanticationPages/StartPage';
import LoginPage from './AuthanticationPages/LoginPage';
import Homepage from './homepage/Homepage';
import Academy from './Academyscreen/Academy';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<StartPage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/signup' element={<Signuppage />}></Route>
          <Route path='/homepage' element={<Homepage />}></Route>
          <Route path='/academy' element={<Academy />}></Route>
        </Routes>
      </Router>

    </>
  )
}

export default App