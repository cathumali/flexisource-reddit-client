import * as React from 'react';
import {
  BrowserRouter,
  Routes, // Just Use Routes instead of "Switch"
  Route,
} from "react-router-dom";
import Posts from "./pages/Posts";
import Layout from './components/Layout'

function App() {
  return (
    <React.Fragment>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Posts />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </React.Fragment>
  );
}

export default App;
