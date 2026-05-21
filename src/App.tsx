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

const Home = lazy(() => import('./pages/Home.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const Projects = lazy(() => import('./pages/Projects.tsx'));
const Certifications = lazy(() => import('./pages/Certifications.tsx'));
const ProjectsDetails = lazy(() => import('./pages/ProjectsDetails.tsx'));
const CertificationList = lazy(() => import('./pages/CertificationList.tsx'));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="sync">
      <motion.div
        key={location.pathname}
        initial={{
          opacity: 0,
          y: 12,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -8,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="h-full"
      >
        <Suspense fallback={null}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificationsList" element={<CertificationList />} />
            <Route path="/certifications/:id" element={<Certifications />} />
            <Route path="/projects/:id" element={<ProjectsDetails />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
