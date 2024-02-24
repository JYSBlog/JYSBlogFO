import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from "./views/Blog.jsx";

import './App.css'

function App() {
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blog />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App