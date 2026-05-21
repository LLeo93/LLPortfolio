import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import './Style/ScrollBar.css';

/* LAZY PAGES */
const Home = lazy(() => import('./pages/Home.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const Projects = lazy(() => import('./pages/Projects.tsx'));
const Certifications = lazy(() => import('./pages/Certifications.tsx'));
const ProjectsDetails = lazy(() => import('./pages/ProjectsDetails.tsx'));
const CertificationList = lazy(() => import('./pages/CertificationList.tsx'));

/* ROUTE ANIMATIONS */
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{
          opacity: 0,
          y: 18,
          scale: 0.985,
          filter: 'blur(8px)',
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
        }}
        exit={{
          opacity: 0,
          y: -10,
          scale: 0.99,
          filter: 'blur(6px)',
        }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          willChange: 'transform, opacity, filter',
        }}
        className="w-full"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/certificationsList" element={<CertificationList />} />

          <Route path="/certifications/:id" element={<Certifications />} />

          <Route path="/projects/:id" element={<ProjectsDetails />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

/* APP */
function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={null}>
          <Layout>
            <AnimatedRoutes />
          </Layout>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
