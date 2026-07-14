import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import { ThemeProvider } from '@/contexts';
import { Router } from '@/routes';
import '@/scss/main.scss';
import themeConfig from '@/theme.config';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider config={themeConfig}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
