import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MoviePreview } from './components/MoviePreview';

function App() {
  return (
    <div className="container">
      <Header />
      <MoviePreview />
      <Footer />
    </div>
  );
}

export default App;
