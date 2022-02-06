import React, { useEffect, useState } from 'react'; 
import { connect } from 'react-redux'; 
import { Box, Divider } from '@mui/material';

import {
  fetchPostContents,
  fetchPostComments
} from "../../redux/actions";
import { withRouter } from '../../utils/global';
import About from './components/About';
import Comments from './components/Comments';

const PostDetails = (props) => {
  const [aboutData, setAboutData] = useState('');
  const [postComments, setPostComments] = useState([]);
  const [loadingAbout, setLoadingAbout] = useState(true);
  const [loadingComments, setLoadingComments] = useState(true);

  useEffect(()=> {
    const { router : {
        params : {
          subreddit, 
          id
        }
      } 
    } = props;

    props.fetchPostContents(subreddit).then(res => {
      setLoadingAbout(false);
      setAboutData(res);
    });

    props.fetchPostComments(subreddit, id).then(res => {
      setLoadingComments(false)
      setPostComments(res);
    });

  },[]); 

  return (
    <Box>
      { loadingAbout ? 'Loading Details' : <About about={aboutData} /> }
      <Divider />
      <br/>
      <Divider/>      
      { loadingComments ? 'Loading Comments' : <Comments comments={postComments} /> }
    </Box>
  );
}

const mapStateToProps = ( state ) => ({ 
  post_content : state.post_content,
}); 
const mapDispatchToProps = (dispatch) => ({
  fetchPostContents: (subreddit) =>dispatch(fetchPostContents(subreddit)),
  fetchPostComments: (subreddit, id) =>dispatch(fetchPostComments(subreddit, id)),
});
export default connect( mapStateToProps, mapDispatchToProps )(withRouter(PostDetails));
