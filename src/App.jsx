// App.js
import {  Routes, Route , BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';

import Home from './pages/Home/Home.jsx';
// import About from './components/About';
// import Contact from './components/Contact';


function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
     
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;