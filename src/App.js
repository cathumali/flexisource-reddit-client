import * as React from 'react';
import {
  BrowserRouter,
  Routes, // Just Use Routes instead of "Switch"
  Route,
} from "react-router-dom";
import Posts from "./pages/Posts";

function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />} />
      </Routes>
    </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
