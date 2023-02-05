import '../../App.css';
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'

function Home() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
            <Paper elevation={3} sx={{ maxWidth: '550px', width: '100%', padding: '10px', backgroundColor: '#6F4e37' }}>
                <h1 style={{ textAlign: 'center' }}>
                    Welcome to Third Wave Coffee Review
                </h1>
            </Paper>
        </Box>
    )
}

export default Home;