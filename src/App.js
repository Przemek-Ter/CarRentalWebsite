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
import CarOnePage from './pages/SecyficCarPages/CarOnePage';
import CarTwoPage from './pages/SecyficCarPages/CarTwoPage';
import CarThreePage from './pages/SecyficCarPages/CarThreePage';

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
          <Route path="/cars/amg-a45" element={<CarOnePage />} />
          <Route path="/cars/bmw-z4" element={<CarTwoPage />} />
          <Route path="/cars/range-rover-velar" element={<CarThreePage />} />

        </Routes>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
