import P from 'prop-types';
import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';

//Observação só otimize o seu código se vc realmente tiver um problema
const Post = ({ post, handleClick }) => {
  return (
    <div key={post.id} className="post">
      <h1 onClick={() => handleClick(post.title)}>{post.title}</h1>
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
  handleClick: P.func,
};

function App5() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  //no Jsx do nosso elemento podemos passar um atributo chamado ref
  //q podemos direcionar para a const do nosso useRef
  const input = useRef(null);
  //é muito usado para pegar um elemento da dom

  const counter = useRef(0);
  //importante lembrar q sempre q o valor de useRef mudar a pagina não vai renderizar

  //componentDidMount:
  useEffect(() => {
    //por ser async ele gera uma segunda renderização devido ao posts.map()
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  useEffect(() => {
    //sempre q for usar a const do useRef tem q se usar a palavra current
    input.current.focus();
    console.log(input.current);
  }, [value]);

  useEffect(() => {
    counter.current++;
  });

  const handleClick = (value) => {
    setValue(value);
  };

  //por mudar o status do input, que muda um state da pagina, faz com quer a pagina inteira renderize isso faz com quer um comportamento q não queremos nos posts fique acontecendo, q é eles ficarem sempre renderizando a qualquer tecla digitada no input
  return (
    <div className="App">
      <h1>Contador: {counter.current}x</h1>
      <p>
        <input
          ref={input}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return posts.length > 0 ? (
          posts.map((post) => (
            <Post key={post.id} post={post} handleClick={handleClick} />
          ))
        ) : (
          <p>Ainda não existe posts</p>
        );
      }, [posts])}
    </div>
  );
}

export default App5;
