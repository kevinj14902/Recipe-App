import React from 'react';
import Home from './Home';
import Cuisines from './Cuisines';
import Searched from './Searched';
import Recipes from './Recipes';
import {Route, Routes} from "react-router-dom";

function Pages() {
  return (

      <Routes>
        <Route path="/Recipe-App" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/cuisines/:type" element={<Cuisines />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipes/:name" element={<Recipes />} />
      </Routes>

  )
}

export default Pages;