import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Navigation from './Components/Nav';
import Login from './Pages/Login';
import DMVPage from './Pages/Departments/DMVPage';
import SSPage from './Pages/Departments/SSPage';
import DOSPage from './Pages/Departments/DOSPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path={'/'} element = {<Home />}/>
          <Route path = {'/login'} element = {<Login />}/>
          <Route path = {'/DMV'} element = {<DMVPage />}/>
          <Route path = {'/SocialSecurity'} element = {<SSPage/>}/>
          <Route path = {'/DepartmentOfState'} element = {<DOSPage />}/>

          <Route path={'*'} element = {<h1>Page Not Found</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
