import logo from './logo.svg';
import './App1.css';
import { useState } from 'react';
// import { Component } from 'react';

function App1() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';
  //quando se tiver usando set"State" do useState é muito mais aconselhável usar função de callback q pega o valor prev do state
  const handleClick = () => {
    setReverse((prevReverse) => !prevReverse);
  };
  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <h1>Contador: {counter}</h1>
        <p>
          <button type="button" onClick={handleClick}>
            Reverse {reverseClass}
          </button>
        </p>
        <p>
          <button type="button" onClick={handleIncrement}>
            Increment {counter}
          </button>
        </p>
      </header>
    </div>
  );
}
//como seria em componente de class field;
// class App extends Component {
//   state = {
//     reverse: false,
//   };
//   handleClick = () => {
//     const { reverse } = this.state;
//     this.setState({ reverse: !reverse });
//   };

//   render() {
//     const { reverse } = this.state;
//     const reverseClass = reverse ? 'reverse' : '';
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
//           <button type="button" onClick={this.handleClick}>
//             Reverse {reverseClass}
//           </button>
//         </header>
//       </div>
//     );
//   }
// }
export default App1;
