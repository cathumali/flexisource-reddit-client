import React, { useEffect } from 'react'; 
import { connect } from 'react-redux'; 
import { Grid, Box } from '@mui/material';

import Filter from './components/Filter';
import Post from './components/Post';
import {
  fetchPosts
} from "../../redux/actions";
import { config } from '../../utils/config';

const Posts = (props) => {
  useEffect(()=> {   
    props.fetchPosts();
  },[]); 

  const filterSelection = (obj) => {
    props.fetchPosts(obj.value);
  }

  return (
    <React.Fragment>       
       <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Filter 
              label={config.filterByLabel}
              options={config.topics}
              name={config.filter}
              filterSelection={filterSelection}
            />
          </Grid>
          <Grid item xs={6}>
            {/* <Filter 
              label={config.sortyByLabel}
              options={config.sortBy}
              name={config.sort}
              filterSelection={filterSelection}
            /> */}
          </Grid>

          <Grid item xs={12}>
              <div>{ props.loading && 'Loading Posts' }</div>
              { props.posts.data &&
                props.posts.data.map((post, i) =>
                <Post key={i} post={post} />
              )}
          </Grid> 
        </Grid>
      </Box>
    </React.Fragment>
  );
}

const mapStateToProps = ( state ) => ({ 
  posts : state.posts,
}); 
const mapDispatchToProps = (dispatch) => ({
  fetchPosts: (val) =>dispatch(fetchPosts(val)),
});
export default connect( mapStateToProps, mapDispatchToProps )(Posts);
