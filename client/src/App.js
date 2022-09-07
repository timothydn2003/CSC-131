import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Nav from './Components/Nav';
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path={'/'} element = {<Home />}/>
          <Route path={'*'} element = {<h1>Page Not Found</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
