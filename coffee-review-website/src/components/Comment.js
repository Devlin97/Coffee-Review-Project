import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

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
    <>
      {comments.map(com => (
        <Card variant='outline' key={com.id}>
          <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {com.name}
              </Typography>
              <Typography variant="h5" component="div">
                  {com.text}
              </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  )}
}

export default Comment