import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Correct import
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './pages/context/AuthContext.jsx';
import {Toaster} from "react-hot-toast"
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000/api/v1";
axios.defaults.withCredentials = true;
const theme = createTheme({
  typography: {
    fontFamily: "Work Sans, sans-serif",
    allVariants: { color: "white" },
  },
});

createRoot(document.getElementById('root')).render( // Use createRoot directly
  <StrictMode>
    <AuthProvider>
    <BrowserRouter>
      <ThemeProvider theme={theme}> {/* Wrap your app with ThemeProvider */}
        <Toaster position="top-right" />
        <App />
      </ThemeProvider>
    </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
);
