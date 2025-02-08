import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/theme';
import Home from './pages/Home';
import CaseStudies from './pages/Blog';
import CaseStudy from './pages/BlogPost';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<CaseStudies />} />
          <Route path="/blog/:slug" element={<CaseStudy />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
