import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// ✅ Import Toaster from react-hot-toast
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster
  position="top-right"
  toastOptions={{
    style: {
      background: '#1a1a1a', // dark background
      color: '#fff',         // white text
      borderRadius: '0.75rem', // rounded-xl
      padding: '1rem 1.25rem',
      fontSize: '0.875rem',
      fontWeight: '500',
    },
    success: {
      iconTheme: {
        primary: '#915EFF',  // your purple accent
        secondary: '#1a1a1a',
      },
      style: {
        border: '1px solid #915EFF',
      },
    },
    error: {
      iconTheme: {
        primary: '#EF4444', // red-500
        secondary: '#1a1a1a',
      },
      style: {
        border: '1px solid #EF4444',
      },
    },
  }}
/>
    <App />
  </React.StrictMode>
);
