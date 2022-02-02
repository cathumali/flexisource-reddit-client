import React, { useEffect } from 'react'; 
import { connect } from 'react-redux';  
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {
  fetchFeeds
} from "../../redux/actions";

const Home = (props) => {

  useEffect(()=> {   
    props.fetchFeeds();
  },[]); 

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
     </Container>
    </React.Fragment>
  );
}

const mapStateToProps = ( state ) => ({ 
  feeds : state,
}); 
const mapDispatchToProps = (dispatch) => ({
  fetchFeeds: () =>dispatch(fetchFeeds()),
});
export default connect( mapStateToProps, mapDispatchToProps )(Home);
