import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import parse from 'html-react-parser';
import moment from 'moment';
import './index.scss';

// const getPermalink = ( str ) => {  
//   let newStr = str.substring(0, str.length - 1);
//   return newStr.substring(newStr.lastIndexOf("/") + 1, newStr.length)
// }

const YoutubeMedia = (props) => {
  const { media } = props;
  if(!media || media.type !== 'youtube.com') { return null; }
  return <div dangerouslySetInnerHTML={{ __html: parse(media.oembed.html)}} />
}

const ImagePreview = (props) => {
  if( !props.preview){ return null; }
  return <>
      {props.preview.images.map( image => {
        return (<CardMedia
          key={image.id}
          component="img"
          height={image.source?.height}
          width={image.source?.width}
          image={parse(image.source?.url)}
          alt="img"
        />)    
      })}
  </>
}

export default function Post(props) {
  const { post } = props; 
  // const permalink = getPermalink(post.permalink);
  return (
    <Card sx={{ my: "2rem" }}>      
      <CardHeader
        title={<a href={`${post.subreddit}/post/${post.id}`} ><b>{post.title}</b></a>}
        subheader={moment.unix(post.created).format('LL')}
      />      

      <ImagePreview preview={post.preview} />
      <YoutubeMedia media={post.media} /> 
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          { post.selftext_html && <div dangerouslySetInnerHTML={{ __html: parse(post.selftext_html)}} /> }
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>      
    </Card> 
  );
}
