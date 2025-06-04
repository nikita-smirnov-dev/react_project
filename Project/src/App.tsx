import { QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
// import { MovieDetails } from './pages/MovieDetails';
// import { MoviesByGenre } from './pages/MoviesByGenre';
// import { Genres } from './pages/Genres';
import { Home } from './pages/Home';
import { queryClient } from './api/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <Header />
        <Home />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
