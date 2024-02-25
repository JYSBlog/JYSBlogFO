import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from "./views/Blog.jsx";

import './App.css'

function App() {

//test주석 삭제필요
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blog />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App