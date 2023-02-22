import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home/Home';
import Recipes from './components/pages/Recipe/Recipes';
import Profile from './components/pages/Profile/Profile.js';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import AddRecipe from './components/pages/Recipe/AddRecipe';
import ModPage from './components/pages/Mod/ModPage';
import PouroverRecipe from './components/pages/Recipe/PouroverRecipe';
import CreateRecipe from './components/pages/Recipe/CreateRecipe';
import ImmersionDetails from './components/pages/Recipe/ImmersionDetails';
import EditRecipe from './components/pages/Profile/EditRecipe';
import EditPourover from './components/pages/Recipe/EditPourover';
import EditAeropress from './components/pages/Recipe/EditAeropress';
import AboutHome from './components/pages/About/AboutHome';

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
        <Route path='/register' element= {<Register />} />
        <Route path='/addRecipe' element= {<AddRecipe />} />
        <Route path='/createRecipe' element= {<CreateRecipe />} />
        <Route path='/mod' element={<ModPage />} />
        <Route path='/pourover' element={<PouroverRecipe />} />
        <Route path='/imDetails' element={<ImmersionDetails />} />
        <Route path='/editImmersion/:id' element={<EditRecipe />} />
        <Route path='/editPourover/:id' element={<EditPourover />} />
        <Route path='/editAeropress/:id' element={<EditAeropress />} />
        <Route path='/About' element={<AboutHome />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
