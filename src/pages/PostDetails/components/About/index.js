import * as React from 'react';
import { Box, Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import parse from 'html-react-parser';
import moment from 'moment';

export default function About(props) {
  const { about : {
      data
    } 
  } = props;
  
  if(!data) {
    return null;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
            <h1>{ data.title }</h1>
            { moment.unix(data.created).format('LL') }
            <Divider/>
            {  data.description && 
              <div dangerouslySetInnerHTML={{ __html: parse(data.description_html)}} />
            }
        </Grid>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </Box>
  );
}