import React from 'react';
import { Footer, Navbar } from './components';
import Silder from './components/Silder';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Silder/>
      <Footer />
    </div>
  );
}

export default App;
