import { QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { queryClient } from './api/queryClient';
import { FetchMoviesByGenre } from './pages/MoviesByGenre';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <Header />
        <FetchMoviesByGenre />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
