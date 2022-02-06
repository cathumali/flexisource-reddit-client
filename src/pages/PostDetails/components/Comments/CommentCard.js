import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import parse from 'html-react-parser';
import moment from 'moment';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function CommentCard(props) {
  const { comment } = props;
  const { data } = comment?.data?.children[0];

  if( !data.body) {
    return null
  } 
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <b>{ data.author_fullname } </b>
        </Typography>
        <Typography sx={{ fontSize: 14, mb: 1.5 }} color="text.secondary">
          { moment.unix(data.created).format('LL') }
        </Typography>
        <Typography variant="body2">
          { data.body && <div dangerouslySetInnerHTML={{ __html: parse(data.body_html)}} /> }
        </Typography>
      </CardContent>
    </Card>
  );
}
