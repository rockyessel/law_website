import React from 'react';
import {
  Footer,
  Banner,
  Navbar,
  WhoWeAre,
  WhatWeDo,
  FooterBanner,
} from './components';

function App() {
  return (
    <div className='w-5/6 container mx-auto'>
      <Navbar />
      <Banner />
      <WhoWeAre />
      <WhatWeDo />
      <FooterBanner />
      <Footer />
    </div>
  );
}

export default App;
