import {BrowserRouter as Router} from 'react-router-dom';

import {AppRouter} from './components/AppRouter';
import {NavBar} from './components/NavBar';

export const App = () => {
  return (
    <Router>
      <NavBar/>
      <AppRouter/>
    </Router>
  );
};
