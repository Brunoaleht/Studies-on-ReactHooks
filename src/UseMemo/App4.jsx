import P from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import './App.css';

//Observação só otimize o seu código se vc realmente tiver um problema
const Post = ({ post }) => {
  console.log('filho renderizou');
  return (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};
Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

function App4() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  console.log('Pai renderizou');

  //componentDidMount:
  useEffect(() => {
    //por ser async ele gera uma segunda renderização devido ao posts.map()
    setTimeout(() => {
      //usando o setTimeOute só para simular um carregamento
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  //por mudar o status do input, que muda um state da pagina, faz com quer a pagina inteira renderize isso faz com quer um comportamento q não queremos nos posts fique acontecendo, q é eles ficarem sempre renderizando a qualquer tecla digitada no input
  return (
    <div className="App">
      <p>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return posts.length > 0 ? (
          posts.map((post) => <Post key={post.id} post={post} />)
        ) : (
          <p>Ainda não existe posts</p>
        );
      }, [posts])}
    </div>
  );
}

export default App4;
