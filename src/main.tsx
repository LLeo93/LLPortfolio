import { createRoot } from 'react-dom/client';
import './index.css';
import './i18n.ts';
import App from './App.tsx';
import './Style/ScrollBar.css';

createRoot(document.getElementById('root')!).render(<App />);
