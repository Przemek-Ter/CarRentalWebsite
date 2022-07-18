import './App.css';
//Components
import Nav from './components/navbar/Nav'
import Footer from './components/footer/Footer'

//Pages
import HomePage from './pages/homePage/Home';
import CarsPage from './pages/carsPage/CarsPage';
import CarOnePage from './pages/SecyficCarPages/CarOnePage';
import CarTwoPage from './pages/SecyficCarPages/CarTwoPage';
import CarThreePage from './pages/SecyficCarPages/CarThreePage';
import CarFourPage from './pages/SecyficCarPages/CarFourPage';
import AboutPage from './pages/aboutPage/AboutPage';
import StatutePage from './pages/statutePage/StatutePage';
import ContactUsPage from './pages/contactUsPage/ContactUsPage';
import QuestionFormPage from './pages/formPages/questionForm/QuestionFormPage';
import ReservationFormPage from './pages/formPages/reservationForm/ReservationFormPage';

//For navigation purpose (need to install first)
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/scrollToTop/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Nav />
        {/* All the pages */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cars" element={<CarsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/statute" element={<StatutePage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/contact-us/question-form" element={<QuestionFormPage />} />
          <Route path="/contact-us/reservation-form" element={<ReservationFormPage />} />
          <Route path="/cars/mustang-gt" element={<CarOnePage />} />
          <Route path="/cars/bmw-z4" element={<CarTwoPage />} />
          <Route path="/cars/range-rover-velar" element={<CarThreePage />} />
          <Route path="/cars/audi-a4" element={<CarFourPage />} />

        </Routes>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
