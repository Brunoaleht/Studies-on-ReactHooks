import { useAsync } from '../useAsync';
import { useEffect } from 'react';
import './styles.css';

const fetchData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await data.json();
  return json;
};

function App() {
  //const [posts, setPosts] = useState(null);
  const [reFetchData, result, error, status] = useAsync(fetchData, true);

  function handleClick() {
    reFetchData();
  }

  //simulando um render
  useEffect(() => {
    setTimeout(() => {
      reFetchData();
    }, 3000);
  }, [reFetchData]);

  if (status === 'idle') {
    return (
      <div>
        <pre>Nada Executando</pre>
      </div>
    );
  }
  if (status === 'pending') {
    return (
      <div>
        <pre>Loading....</pre>
      </div>
    );
  }
  if (status === 'error') {
    return (
      <div>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }
  if (status === 'settled') {
    return (
      <div>
        <pre onClick={handleClick}>{JSON.stringify(result, null, 2)}</pre>
      </div>
    );
  }
}

export default App;
