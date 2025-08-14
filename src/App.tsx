import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import MainMenu from './components/MainMenu';
import ContactUs from './components/ContactUs';
import SplatViewer from './components/SplatViewer';
import HowToUse from './components/HowToUse';
import './App.css';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<LoadingScreen />} />
          <Route path="/main" element={<MainMenu />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/viewer" element={<SplatViewer />} />
          <Route path="/how-to-use" element={<HowToUse />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
