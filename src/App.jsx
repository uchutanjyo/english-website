// App.js
import {  Routes, Route , BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home/Home.jsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme'; 
// import About from './components/About';
// import Contact from './components/Contact';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;