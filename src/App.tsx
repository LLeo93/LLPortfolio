import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import LoadingPage from './pages/LoadingPage.tsx';

const Home = lazy(() => import('./pages/Home.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const Projects = lazy(() => import('./pages/Projects.tsx'));
const Certifications = lazy(() => import('./pages/Certifications.tsx'));
const ProjectsDetails = lazy(() => import('./pages/ProjectsDetails.tsx'));
import './Style/ScrollBar.css';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<LoadingPage />}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/projects/:id" element={<ProjectsDetails />} />
            </Routes>
          </Layout>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
