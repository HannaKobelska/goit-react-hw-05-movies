import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Cast } from '../components/Cast/Cast';
import { Review } from '../components/Review/Review';
import { SharedLayout } from './SharedLayout/SharedLayout.jsx'

const NotFound = lazy(() => import('../pages/NotFound'));
const Searchbar = lazy(() => import('../pages/Searchbar'));
const MovieView = lazy(() => import('../pages/MovieView'));
const Home = lazy(() => import('../pages/Home'));


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Suspense fallback={<h2>Loading ...</h2>}> <Home /></Suspense>} />
          <Route path="movies" element={<Suspense fallback={<h2>Loading ...</h2>}> <Searchbar /></Suspense>} />
          <Route path="movies/:movieId" element={<Suspense fallback={<h2>Loading ...</h2>}> <MovieView /></Suspense>} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
        </Route>

        <Route path="*" element={<Suspense fallback={<h2>Loading ...</h2>}><NotFound /></Suspense>}/>
      </Routes>
    </div>
  );
};
