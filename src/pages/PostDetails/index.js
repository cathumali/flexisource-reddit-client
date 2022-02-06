import React, { useEffect } from 'react'; 
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
  const [aboutData, setAboutData] = React.useState('');
  const [postComments, setPostComments] = React.useState([]);

  useEffect(()=> {   

    const { router : {
        params : {
          subreddit, 
          id
        }
      } 
    } = props;

    props.fetchPostContents(subreddit).then(res => {
      setAboutData(res);
    });

    props.fetchPostComments(subreddit, id).then(res => {
      setPostComments(res);
    });

  },[]); 

  return (
    <Box>
      <About about={aboutData} />
      <Divider />
      <Divider/>
      <Comments comments={postComments} />
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
