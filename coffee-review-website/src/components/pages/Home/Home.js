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
                <Paper 
                    elevation={3} 
                    sx={{ 
                        maxWidth: '550px', 
                        width: '100%', 
                        padding: '10px', 
                        background: 'linear-gradient( 112.1deg,  rgba(32,38,57,0.6) 11.4%, rgba(63,76,119,0.6) 70.2% )',
                        color: '#CBCCCD' 
                    }}>

                    <h1 style={{ textAlign: 'center' }}>
                        Welcome to Third Wave Coffee Review
                    </h1>

                    <img src={logo} alt='logo' style={{ display: 'block', margin: '0 auto', width: '60%' }} />
                </Paper>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', alignContent: 'center' }}>
                <ThirdWaveCoffeeCard />
                <CreateRecipeCard />
                <RegisterCard />
            </Box>
        </>
    )
}

export default Home;