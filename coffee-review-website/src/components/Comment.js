import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import CommentIcon from '@mui/icons-material/Comment'
import Stack from '@mui/material/Stack' 

const textColor = '#CBCCCD';

const Comment = ({ postIdIn }) => {
  const [comments, setComments] = useState([]);
  
  const fetchComments = async() => {
    const creds = { postId: postIdIn };

    console.log(creds);

    const data = await fetch('/getComments', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(creds),
    });

    const jsonComments = await data.json();

    console.log('The Comments: ', jsonComments);

    setComments(jsonComments);
  }

  useEffect(() => {
    if(postIdIn) {
      fetchComments();
    }
  }, [postIdIn]);

  if(comments.length > 0) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0', marginTop: '10px' }}>
      <Stack
        spacing={2}
        direction='column'
        alignItems='stretch'
        width='100%'
        sx={{
          maxWidth: '300px'
        }}
      >
        <TextField 
          id='recipe-search' 
          label='Search' 
          variant='standard'
          multiline
          rows={3}
          placeholder='Leave a Comment for this Recipe!'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <CommentIcon style={{ color: '#CBCCCD' }} />
              </InputAdornment>
            )
          }}
          sx={{ width: '100%', input: { color: textColor } }}
          inputProps={{ style: { color: textColor } }}
          InputLabelProps={{ style: { color: '#CBCCCD' } }}
        />
        {comments.map(com => (
          <Box sx={{ minWidth: '250px' }}>
            <Card variant='outline' key={com.id} sx={{ background: 'linear-gradient( 112.1deg,  rgba(32,38,57,0.6) 11.4%, rgba(63,76,119,0.6) 70.2% )'}}>
              <CardContent>
                  <Typography sx={{ fontSize: 14 }} color={textColor} gutterBottom>
                      {com.name}
                  </Typography>
                  <Typography variant="h5" component="div" color={textColor}>
                      {com.text}
                  </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Stack>
    </Box>
  )}
}

export default Comment