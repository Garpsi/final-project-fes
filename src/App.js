import './App.css';
import Home from './pages/Home';
import Games from './pages/Games'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GameInfo from './pages/GameInfo';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/games' element={<Games />} />
          <Route exact path='/games/:id' element={<GameInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
