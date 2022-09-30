import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Navigation from './Components/Nav';
import Login from './Pages/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path={'/'} element = {<Home />}/>
          <Route path = {'/login'} element = {<Login />}/>
          <Route path={'*'} element = {<h1>Page Not Found</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
