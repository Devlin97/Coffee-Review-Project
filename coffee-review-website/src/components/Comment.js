import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const Comment = ({ commentIn }) => {
  return (
    <Card variant='outline'>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {commentIn.username}
            </Typography>
            <Typography variant="h5" component="div">
                {commentIn.comment}
            </Typography>
        </CardContent>
    </Card>
  )
}

export default Comment