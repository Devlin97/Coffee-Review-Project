import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import CommentIcon from '@mui/icons-material/Comment'
import Stack from '@mui/material/Stack' 
import Button from '@mui/material/Button'

const textColor = '#CBCCCD';

const Comment = ({ postIdIn, brewMethodIn }) => {
  const [comments, setComments] = useState([]);
  const [theComment, setTheComment] = useState('');

  const [loggedInId, setLoggedInId] = useState();
  
  const fetchComments = async() => {
    const creds = { 
      postId: postIdIn,
      brewMethod: brewMethodIn 
    };

    const data = await fetch('/getComments', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(creds),
    });

    const jsonComments = await data.json();

    setComments(jsonComments);
  }

  const fetchId = async () => {
    const token = localStorage.getItem('token');

    const data = await fetch('/getId', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token' : token
      },
    });

    const jsonData = await data.json()

    console.log('JSON DATA: ', jsonData);
    setLoggedInId(jsonData);
  }

  useEffect(() => {
    if(postIdIn) {
      fetchComments();
      fetchId();
    }
  }, [postIdIn]);

  const handleCommentSubmit = async () => {
    
    if(localStorage.getItem('loginID') === null) {
      alert('You must be logged in to leave comments!');
    }
    if(theComment.length > 150) {
      alert('Please make sure the comment length is under 150 charachters!');
    }
    else {
      const creds = {
        postId: postIdIn,
        userId: JSON.parse(localStorage.getItem('loginID')),
        text: theComment,
        brewMethod: brewMethodIn
      }

      const data = await fetch('/leaveComment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds),
      });

      const jsonComments = await data.json();

      setComments(jsonComments);

      setTheComment('');
    }
  }

  const handleCommentDelete = async (idIn) => {
    const creds = {
      comId: idIn,
      postId: postIdIn,
      brewMethod: brewMethodIn
    };

    const data = await fetch('/deleteComment', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(creds),
    });

    const jsonData = await data.json();

    setComments(jsonData);
  }

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      margin: '0', 
      marginTop: '10px'
    }}>
      
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
          label='Comment' 
          variant='standard'
          multiline
          rows={3}
          onChange={(e) => setTheComment(e.target.value)}
          placeholder='Leave a Comment for this Recipe!'
          value={theComment}
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
        <Button variant='contained' color='success' onClick={() => handleCommentSubmit()}>Leave Comment</Button>
        <Box sx={{ overflowX: 'hidden', overflowY: 'auto', height: '600px' }}>
        {comments.length > 0 &&
        <> 
          {comments.map(com => (
            <Box sx={{ minWidth: '250px', marginBottom: '10px' }} key={com.id}>
              <Card variant='outline' sx={{ background: 'rgba(63,76,119,0.6)' }}>
                <CardContent sx={{ position: 'relative' }}>
                    <Typography sx={{ fontSize: 15 }} color={textColor} gutterBottom>
                        {com.name}
                        {loggedInId === com.userId &&
                          <Button color='error' size='small' onClick={() => handleCommentDelete(com.id)} sx={{ position: 'absolute', top: '0', right: '0' }}>Delete</Button>
                        }
                    </Typography>
                    <Typography variant="h5" component="div" color={textColor}>
                        {com.text}
                    </Typography>
                    
                </CardContent>
              </Card>
            </Box>
          ))}
        </>
        }
      </Box>
      </Stack>
    </Box>
  )
}

export default Comment