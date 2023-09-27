import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import React, { lazy, Suspense } from 'react'; 

const Store = lazy(() => import('./components/Store/Store').then((module) => {
  return { default: module.Store };
}));
const Home = lazy(() => import('./components/Home/Home'));
const About = lazy(() => import('./components/About/About'));

function App () {
  return (
    <Router>
      <Routes> 
        <Route path='/' element={ <NavWrapper /> }>
          <Route path='/home' element={ <Home /> } />
          <Route path='/store' element={ <Store /> } />
          <Route path='/about' element={ <About /> } />
        </Route>
      </Routes>
    </Router>
  );
}

function NavWrapper () {
  return (
    <>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link to='/home'>Home</Link>
        <Link to='/store'>Store</Link>
        <Link to='/about'>About</Link>
      </nav>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
}

//Outlet to be used when you want to render something as a parent component 

export default App; 