import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  let tak = null
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
       <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
