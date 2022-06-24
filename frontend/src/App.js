import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Albums from './Pages/Albums';
import Album1 from './Pages/album-2022';
import Album2 from './Pages/album-2021';
import Album3 from './Pages/album-2020';
import Album4 from './Pages/album-2019';
import Album5 from './Pages/album-2017';
import Bio from './Pages/Bio';


const App = () => {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />,
        <Route exact path="/Albums" element={<Albums />} />,
        <Route exact path="/album-2022" element={<Album1 />} />,
        <Route exact path="/album-2021" element={<Album2 />} />,
        <Route exact path="/album-2020" element={<Album3 />} />,
        <Route exact path="/album-2019" element={<Album4 />} />,
        <Route exact path="/album-2017" element={<Album5 />} />,
        <Route exact path="/Bio" element={<Bio />} />
      </Routes>
    </Router>
  );
};

export default App;