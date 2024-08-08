import React from 'react';
import Home from './Home';
import Cuisines from './Cuisines';
import Searched from './Searched';
import Recipes from './Recipes';
import {Route, Routes, useLocation} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/Recipe-App" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/cuisines/:type" element={<Cuisines />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipes/:name" element={<Recipes />} />
      </Routes>
    </AnimatePresence>
  )
}

export default Pages;