import React from 'react';
import Home from './Home';
import Cuisines from './Cuisines';
import {Route, Routes} from "react-router-dom";

function Pages() {
  return (

      <Routes>
        <Route path="/Recipe-App" element={<Home />} />
        <Route path="/cuisines" element={<Cuisines />} />
      </Routes>

  )
}

export default Pages;