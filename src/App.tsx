import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Import all pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Courses from './pages/Courses';
import Mentorship from './pages/Mentorship';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import MarketAnalysis from './pages/MarketAnalysis';
import TradingCalculators from './pages/TradingCalculators';
import Blog from './pages/Blog';
import EducationalBlog from './pages/EducationalBlog';
import TradingStrategies from './pages/TradingStrategies';
import RiskManagement from './pages/RiskManagement';
import Certifications from './pages/Certifications';
import DailyTradingSignals from './pages/DailyTradingSignals';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Refund from './pages/Refund';
import Disclaimer from './pages/Disclaimer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/market-analysis" element={<MarketAnalysis />} />
            <Route path="/trading-calculators" element={<TradingCalculators />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/educational-blog" element={<EducationalBlog />} />
            <Route path="/trading-strategies" element={<TradingStrategies />} />
            <Route path="/risk-management" element={<RiskManagement />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/daily-trading-signals" element={<DailyTradingSignals />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;