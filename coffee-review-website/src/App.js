import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Recipes from './components/pages/Recipes';
import Profile from './components/pages/Profile';
import Login from './components/pages/Login';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/recipes' element= {<Recipes />} />
        <Route path='/profile' element= {<Profile />} />
        <Route path='/signIn' element= {<Login />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
