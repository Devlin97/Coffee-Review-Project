import '../../App.css';
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import { color } from '@mui/system';
import logo from '../../images/logo.png'

function Home() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
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

                <img src={logo} alt='logo' style={{ display: 'block', margin: '0 auto', width: '80%' }} />
            </Paper>
        </Box>
    )
}

export default Home;