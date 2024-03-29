import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import { Typography, Collapse } from '@mui/material'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material'
import { Link } from 'react-router-dom'

const PouroverDetails = ({ recipeIn = {} }) => {
  const [alertBool, setAlertBool] = useState(false);
  console.log(recipeIn)
  return (
    <Box sx={{ 
        width: '100%', 
        maxWidth: 500, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '10vh', 
        margin: '0',
        /* background: 'linear-gradient( 112.1deg,  rgba(32,38,57,0.6) 11.4%, rgba(63,76,119,0.6) 70.2% )', */
        //backgroundColor: 'rgba(63,76,110,0.6)',
        backgroundColor: 'rgba(38,44,65,0.8)',
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingBottom: '50px',
        paddingTop: '50px', 
        borderRadius: '25px', 
        marginTop: '10px',
        maxHeight: '700px',
        overflowY: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
  
      <Grid container spacing={1}>
  
        <Grid xs={12}>
          <h1 className='create-recipe-h1'>{recipeIn.title}</h1>
          <Link to={ '/user/' + recipeIn.UserId } style={{ textDecoration: 'none' }}>
            <p className='create-recipe-h1'>
              <Typography variant='subtitle2' sx={{ fontSize: 18 }} gutterBottom>
                  {`By: ${recipeIn.username}`}
              </Typography>
            </p>
          </Link>
          <p className='create-recipe-h1'>
            <Typography variant='subtitle2' sx={{ fontSize: 18 }} gutterBottom>
                {`${recipeIn.brewMethod} | ${recipeIn.brewer} | Ratio: ${(recipeIn.waterWeight / recipeIn.coffeeWeight).toFixed(2)}/1`}
            </Typography>
          </p>
        </Grid>
  
        <Grid xs={6}>
        <h3 className='create-recipe-h1'>Coffee In:</h3>
          <p className='create-recipe-h1'>
            <Typography variant='subtitle2' sx={{ fontSize: 18 }} gutterBottom>
              {`${recipeIn.coffeeWeight}g`}
            </Typography>
          </p>
        </Grid>
        
        <Grid xs={6}>
        <h3 className='create-recipe-h1'>Water Weight:</h3>
          <p className='create-recipe-h1'>
            <Typography variant='subtitle2' sx={{ fontSize: 18 }} gutterBottom>
              {`${recipeIn.waterWeight}g`}
            </Typography>
          </p>
        </Grid>

        <Grid xs={12}>
          <hr/>
        </Grid>
  
        <Grid xs={6}>
        <h3 className='create-recipe-h1'>Grinder:</h3>
        <p className='create-recipe-h1'>
          <Typography variant='subtitle2' sx={{ fontSize: 18 }} gutterBottom>
            {recipeIn.grinder}
          </Typography>
        </p>
        </Grid>
  
        <Grid xs={6}>
        <h3 className='create-recipe-h1'>Grind Size:</h3>
        <p className='create-recipe-h1'>
          <Typography variant='subtitle2' sx={{ fontSize: 18 }} gutterBottom>
            {`Clicks: ${recipeIn.grindSize} | Coarse: ${recipeIn.grindCoarseness}/10`}
          </Typography>
        </p>
        </Grid>

        <Grid xs={12}>
          <hr/>
        </Grid>
  
        <Grid xs={6}>
        <h3 className='create-recipe-h1'>Coffee Origin:</h3>
        <p className='create-recipe-h1'>
          <Typography variant='subtitle2' sx={{ fontSize: 18 }} gutterBottom>
            {recipeIn.coffeeOrigin}
          </Typography>
        </p>
        </Grid>
  
        <Grid xs={6}>
        <h3 className='create-recipe-h1'>Total Time (Minutes):</h3>
        <p className='create-recipe-h1'>
          <Typography variant='subtitle2' sx={{ fontSize: 18 }} gutterBottom>
            {recipeIn.totalTimeMinutes}
          </Typography>
        </p>
        </Grid>

        <Grid xs={12}>
          <hr/>
        </Grid>

        {/* <Grid xs={12} sx={{ overflowY: 'auto' }}>
        <TableContainer sx={{ background: 'rgba(11, 11, 11, 0.33)' }}>
          <Table sx={{ overflowY: 'auto' }}>
            <TableHead>
              <TableRow>
                <TableCell align='center' colSpan={2} sx={{ color: '#CBCCCD' }}>
                  Pours
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center' sx={{ color: '#CBCCCD' }}>
                  Pour Start
                </TableCell>
                <TableCell align='center' sx={{ color: '#CBCCCD' }}>
                  Until Water Weight
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recipeIn?.pours.map((pour, i) => (
                <TableRow key={i}>
                  <TableCell align='center' sx={{ color: '#CBCCCD' }}>
                    {pour.time}
                  </TableCell>
                  <TableCell align='center' sx={{ color: '#CBCCCD' }}>
                    {`${pour.water}g`}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Grid> */}

        <Grid xs={12}>
          <h3 className='create-recipe-h1'>Pours:</h3>
        </Grid>

        {recipeIn?.pours.map((pour, i) => (
          <>
            <Grid key={i} xs={4} className='create-recipe-h1'>
              {`Pour ${i + 1}: `}
            </Grid>

            <Grid key={'d' + i} xs={4} className='create-recipe-h1'>
              {pour.time}
            </Grid>

            <Grid key={'x' + i} xs={4} className='create-recipe-h1'>
              {`${pour.water}g`}
            </Grid>
          </>
        ))}

        <Grid xs={12}>
          <hr/>
        </Grid>
  
        <Grid xs={12} style={{ marginTop: '20px' }}>
        <p className='create-recipe-h1'>
          <Typography variant='subtitle2' sx={{ fontSize: 18 }} gutterBottom>
            {recipeIn.description}
          </Typography>
        </p>
        </Grid>
  
      </Grid>
    </Box>
  )
}

export default PouroverDetails