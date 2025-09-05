import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

console.log('Electrobun React view loaded!');

// Create React root and render the app
const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element not found');
}

const root = createRoot(container);
root.render(<App />);
