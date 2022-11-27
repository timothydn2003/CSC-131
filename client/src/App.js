import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Home from './Pages/Home';
import Navigation from './Components/Nav';
import Login from './Pages/Login';
import DMVPage from './Pages/Departments/DMVPage';
import SSPage from './Pages/Departments/SSPage';
import DOSPage from './Pages/Departments/DOSPage';
import UpdateDMVPage from './Pages/Departments/UpdateDMVPage';
import UpdateDOSPage from './Pages/Departments/UpdateDOSPage';
import { useState, createContext } from 'react'
import { auth } from "./firebase"
import { signInWithEmailAndPassword } from 'firebase/auth';

export const AppContext = createContext();

function App() {
  const[signedIn, setSignedIn] = useState(false)
  const[loginUsername, setLoginUsername] = useState('')
  const[loginPassword,setLoginPassword] = useState('')
  const[incorrectLogin, setIncorrectLogin] = useState(true)


  const check = () => {
    signInWithEmailAndPassword(auth,loginUsername,loginPassword)
    .then(( ) => {
      setSignedIn(true)
    }).catch(() => {
      setIncorrectLogin(false)
    })
  }
  const logout = () => {
    setSignedIn(false)
    setIncorrectLogin(true)
    setLoginPassword('')
    setLoginUsername('')
  }
  return (
    <div className="App">
    <AppContext.Provider value={{setLoginUsername, setLoginPassword,incorrectLogin,signedIn}}>
      <Router>
        <Navigation logout = {logout}/>
        <Routes>
          <Route path={'/'} element = {signedIn?<Home />: <Navigate to = '/login'/>}/>
          <Route path = {'/login'} element = {!signedIn?<Login check = {check}/>: <Navigate to = '/'/>}/>
          <Route path = {'/DMV'} element = {signedIn?<DMVPage />: <Navigate to = '/login'/>}/>
          <Route path = {'/UpdateDMV'} element = {signedIn?<UpdateDMVPage />: <Navigate to = '/login'/>}/>
          <Route path = {'/SocialSecurity'} element = {signedIn?<SSPage/>: <Navigate to = '/login'/>}/>
          <Route path = {'/DepartmentOfState'} element = {signedIn?<DOSPage />: <Navigate to = '/login'/>}/>
          <Route path = {'/UpdateDepartmentOfState'} element = {signedIn?<UpdateDOSPage />: <Navigate to = '/login'/>}/>

          <Route path={'*'} element = {<h1>Page Not Found</h1>}/>
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
