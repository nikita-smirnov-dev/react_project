import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MovieDetails } from './pages/MovieDetails';
// import { MoviesByGenre } from './pages/MoviesByGenre';
// import { Genres } from './pages/Genres';
// import { Home } from './pages/Home';

function App() {
  return (
    <div className="container">
      <Header />
      {/* <Home /> */}
      {/* <Genres /> */}
      {/* <MoviesByGenre /> */}
      <MovieDetails />
      <Footer />
    </div>
  );
}

export default App;
