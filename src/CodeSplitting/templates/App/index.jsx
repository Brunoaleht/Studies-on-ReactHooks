import React, { Suspense, useState } from 'react';
//import LazyComponent from '../LazyComponent';
import './styles.css';

const loadComponent = () => {
  //console.log('Component Loading');
  return import('../LazyComponent');
};
const LazyComponent = React.lazy(loadComponent);
//só vai trazer para o código quando for precisar de desempenho
function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <p>
        <button onMouseOver={loadComponent} onClick={() => setShow((s) => !s)}>
          SHOW {show ? 'LC is on screen' : 'LC is off screen'}
        </button>
      </p>
      <Suspense fallback={<p>Loading...</p>}>
        {show && <LazyComponent />}
      </Suspense>
    </div>
  );
}

export default App;
