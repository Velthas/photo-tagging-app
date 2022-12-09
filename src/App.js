import React, { useState } from 'react';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Main from './sections/Main';

function App() {
  const [level, setLevel] = useState(0);
  return (
    <>
      <Header />
      <Main level={level} setLevel={setLevel} />
      <Footer />
    </>
  );
}

export default App;
