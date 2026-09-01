import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import AdatkezelesiTajekoztato from './pages/AdatkezelesiTajekoztato';
import Aszf from './pages/Aszf';
import SikeresFizetes from './pages/SikeresFizetes';
import CookieConsent from './components/CookieConsent';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/adatkezelesi-tajekoztato" element={<AdatkezelesiTajekoztato />} />
        <Route path="/aszf" element={<Aszf />} />
        <Route path="/sikeres-fizetes" element={<SikeresFizetes />} />
      </Routes>
      <CookieConsent />
    </BrowserRouter>
  </StrictMode>
);
