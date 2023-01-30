import { AppContext } from './contexts/AppContext';
import './App.css';
import { Home } from './components/Home';

function App() {
  return (
    <AppContext>
      <Home />
    </AppContext>
  );
}

export default App;
