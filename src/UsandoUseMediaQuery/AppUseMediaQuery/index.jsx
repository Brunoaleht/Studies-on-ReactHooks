import './styles.css';
import { useMediaQuery } from '../../UsandoUseMediaQuery/useMediaQuery/useMediaQuery';

function App() {
  const huge = useMediaQuery('(min-width: 960px)');
  const big = useMediaQuery('(max-width: 959px) and (min-width: 768px)');
  const medium = useMediaQuery('(max-width: 767px) and (min-width: 400px)');
  const small = useMediaQuery('(max-width: 400px)');

  const background = huge
    ? 'green'
    : big
    ? 'red'
    : medium
    ? 'yellow'
    : small
    ? 'purple'
    : null;
  return (
    <div style={{ background }}>
      <h1>OI</h1>
    </div>
  );
}

export default App;
