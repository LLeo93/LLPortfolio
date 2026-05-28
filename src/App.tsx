import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Layout from './components/Layout.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import ScrollManager from './components/ScrollManager.tsx';
import ErrorPage from './pages/ErrorPage.tsx';

const Home = lazy(() => import('./pages/Home.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const Projects = lazy(() => import('./pages/Projects.tsx'));
const Certifications = lazy(() => import('./pages/Certifications.tsx'));
const ProjectsDetails = lazy(() => import('./pages/ProjectsDetails.tsx'));
const CertificationList = lazy(() => import('./pages/CertificationList.tsx'));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Suspense fallback={null}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificationsList" element={<CertificationList />} />
        <Route path="/certifications/:id" element={<Certifications />} />
        <Route path="/projects/:id" element={<ProjectsDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <ScrollManager />
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
