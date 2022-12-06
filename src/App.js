import Header from './pages/Header';
import Footer from './pages/Footer';
import Main from './pages/Main';
import { useState } from 'react';


function App() {
  const [level, setLevel] = useState(0)
  return (
    <>
      <Header />
      <Main level={level} setLevel={setLevel}/>
      <Footer />
    </>
  );
}

export default App;
