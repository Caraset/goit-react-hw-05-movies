import { Routes, Route } from 'react-router-dom';

// import s from './App.module.css';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
// import HomeView from './views/HomeView';
import TrendingMovies from './views/TrendingMovies';
import MovieView from './views/MovieView';
import MoviesSearch from './views/MoviesSearch';

function App() {
  return (
    <Container>
      <AppBar />

      <Routes>
        <Route end path="/" element={<TrendingMovies />} />
        <Route end path="movies" element={<MoviesSearch />} />
        <Route path=":movieId/*" element={<MovieView />} />

        {/* <Route path="/authors">
          <AuthorsView />
        </Route>

        <Route path="/books" exact>
          <BooksView />
        </Route>

        <Route path="/books/:bookId">
          <BookDetailsView />
        </Route>

        <Route>
          <NotFoundView />
        </Route> */}
      </Routes>
    </Container>
  );
}

export default App;
