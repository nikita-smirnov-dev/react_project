import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './api/queryClient';
import { BrowserRouter } from 'react-router-dom';

import { AuthModalProvider } from './context/AuthModalContext';
import { Footer } from './components/Footer';
import { TrailerModalProvaider } from './context/TrailerModalContext';
import { AppRoutes } from './components/AppRoutes/AppRoutes';

import './App.css';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthModalProvider>
          <TrailerModalProvaider>
            <div className="container">
              <AppRoutes />
            </div>
            <Footer />
          </TrailerModalProvaider>
        </AuthModalProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
