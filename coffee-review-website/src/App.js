import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact />
        <Route path='/recipes' exact />
        <Route path='/profile' exact />
      </Routes>
    </Router>
    </>
  );
}

export default App;
