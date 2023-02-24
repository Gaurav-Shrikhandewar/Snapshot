import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Gallery from './Components/Gallery';
import Header from './Components/Header';
import Search from './Components/Search';
import { GalleryProvider } from './context/GalleryContext';

function App() {
  return (
    <div className="App">
         <GalleryProvider>
          <Router>
            <Header />
            <Routes>
              <Route exact_path="/" component={Gallery} />
              <Route path="/mountains" render={()=> <Gallery category="mountains"/> } />
              <Route path="/beaches" render={()=> <Gallery category="beaches"/> } />
              <Route path="/birds" render={()=> <Gallery category="birds"/> } />
              <Route path="/food" render={()=> <Gallery category="food"/> } />
              <Route path="/search" component={Search} />
            </Routes>
          </Router>
         </GalleryProvider>
    </div>
  );
}

export default App;
