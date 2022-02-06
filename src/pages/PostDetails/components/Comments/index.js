import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CommentCard from './CommentCard';

export default function Comments(props) {
  const { comments } = props;

  if(!comments) {
    return null;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>        
        <Grid item xs={12}>
          <h4> Comments </h4>
          { comments.map((comment,i)=> 
            <CommentCard 
              key={i}
              comment={comment} />
            )
          }
        </Grid>
      </Grid>
    </Box>
  );
}