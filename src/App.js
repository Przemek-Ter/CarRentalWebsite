import './App.css';
//Components
import Nav from './components/navbar/Nav'
import Footer from './components/footer/Footer'

//Pages
import HomePage from './pages/homePage/Home';
import CarsPage from './pages/carsPage/CarsPage';
import AboutPage from './pages/aboutPage/AboutPage';
import StatutePage from './pages/ststutePage/StatutePage';
import ContactUsPage from './pages/contactUsPage/ContactUsPage';
//For navigation purpose (need to install first)
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Nav />
        {/* All the pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cars" element={<CarsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/statute" element={<StatutePage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
