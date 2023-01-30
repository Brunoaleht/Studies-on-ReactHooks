//import P from 'prop-types';
import './App.css';
import { Home } from './components/Home';
import { AppContext } from './contexts/AppContext';

function App6() {
  return (
    <AppContext>
      <Home />
    </AppContext>
  );
}

export default App6;
