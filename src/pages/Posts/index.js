import React, { useEffect } from 'react'; 
import { connect } from 'react-redux';  
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Filter from './components/Filter';
import {
  fetchPosts
} from "../../redux/actions";

const Posts = (props) => {

  useEffect(()=> {   
    props.fetchPosts();
  },[]); 

  return (
    <React.Fragment>
      <Filter />
    </React.Fragment>
  );
}

const mapStateToProps = ( state ) => ({ 
  posts : state,
}); 
const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () =>dispatch(fetchPosts()),
});
export default connect( mapStateToProps, mapDispatchToProps )(Posts);
