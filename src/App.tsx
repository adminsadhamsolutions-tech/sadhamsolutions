import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar, Hero, Services, About, Contact, Footer } from './components';
import {
  ServiceDetailPage,
  PaintingServicesPage,
  WebsiteDevelopmentPage,
  AppDevelopmentPage,
  LogoDesignPage,
  DigitalMarketingPage,
  ConstructionServicesPage
} from './pages';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <About />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/website-development" element={<WebsiteDevelopmentPage />} />
        <Route path="/app-development" element={<AppDevelopmentPage />} />
        <Route path="/logo-design" element={<LogoDesignPage />} />
        <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
        <Route path="/construction-services" element={<ConstructionServicesPage />} />
        <Route path="/painting-services" element={<PaintingServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;