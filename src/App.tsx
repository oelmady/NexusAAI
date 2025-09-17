import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AssessmentPage from './pages/AssessmentPage';
import GuidePage from './pages/GuidePage';
import ToolsPage from './pages/ToolsPage';
import { ContactSection } from './components/contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/flowchart" element={<AssessmentPage />} />
            <Route path="/guide" element={<GuidePage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/contact" element={<div className="min-h-screen"><ContactSection variant="centered" /></div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
