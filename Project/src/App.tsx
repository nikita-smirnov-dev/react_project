import { QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { queryClient } from './api/queryClient';
import { FetchMoviesByGenre } from './pages/MoviesByGenre';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import MainLayout from './layout/MainLayout';
import { Genres } from './pages/Genres';
import { MovieDetails } from './pages/MovieDetails';
import { Modal } from './components/Modal';
// import { RegisterSuccess } from './components/RegisterSuccess';
// import { RegisterForm } from './components/RegisterForm';
import { LoginForm } from './components/LoginForm';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="genres">
                <Route index element={<Genres />} />
                <Route path=":genreSlug" element={<FetchMoviesByGenre />} />
              </Route>
              <Route path="about/:id" element={<MovieDetails />} />
            </Route>
          </Routes>
          <Modal>
            <LoginForm />
          </Modal>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
