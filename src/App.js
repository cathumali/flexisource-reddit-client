import * as React from 'react';
import {
  BrowserRouter,
  Routes, // Just Use Routes instead of "Switch"
  Route,
} from "react-router-dom";
import Layout from './components/Layout';
import Posts from './pages/Posts';
import PostDetails from './pages/PostDetails';
function App() {
  return (
    <React.Fragment>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path=":subreddit/post/:id" element={<PostDetails />}  />
          </Routes>
        </BrowserRouter>
      </Layout>
    </React.Fragment>
  );
}

export default App;
