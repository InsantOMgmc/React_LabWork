import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Clicker from './pages/clicker.js'
function App() {
  return (
    <Router>
      <Routes>
        <Route path ='' element={<Clicker />}/>  
      </Routes>
    </Router>
  );
}

export default App;
