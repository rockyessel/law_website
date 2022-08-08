import React from 'react';
import { Footer, Navbar, FooterBanner } from './components';
import { Home, OurStaff, NotFoundPage } from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='w-5/6 container mx-auto'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/our-staff' element={<OurStaff />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <FooterBanner />
      <Footer />
    </div>
  );
}

export default App;
