// import Signuppage from './AuthanticationPages/Signuppage';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
// import StartPage from './AuthanticationPages/StartPage';
// import LoginPage from './AuthanticationPages/LoginPage';
// import Navigation from './homepage/components/Navigation';
import Homepage from './homepage/Homepage';


const App = () => {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path='/' element={<StartPage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/signup' element={<Signuppage />}></Route>
        </Routes>
      </Router> */}

      <Homepage />
    </>
  )
}

export default App