import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import { color } from '@mui/system';
import logo from '../../../images/logo.png'
import PouroverExplainer from './PouroverExplainer';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import ImmersionExplainer from './ImmersionExplainer';
import AeropressExplainer from './AeropressExplainer';
import ThirdWaveCoffeeCard from './ThirdWaveCoffeeCard';
import CreateRecipeCard from './CreateRecipesCard';
import RegisterCard from './RegisterCard';

function Home() {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px', marginBottom: '10px' }}>
                    <img src={logo} alt='logo' style={{ display: 'block', margin: '0 auto', width: '500px', boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)' }} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', alignContent: 'center', marginTop: '50px' }}>
                <ThirdWaveCoffeeCard />
                <CreateRecipeCard />
                <RegisterCard />
            </Box>
        </>
    )
}

export default Home;