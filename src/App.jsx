import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal } from 'solid-js';
const [count,setCount]= createSignal(0);
console.log(count());
setCount(1);
console.log(count());

function App() {
  return (
    <div class={styles.App}>
      <h1>Count: {count()}</h1>
      <button onClick={()=> setCount(count()+1)}>+</button>
      <button onClick={()=> setCount(count()-1)}>-</button>
    </div>
  );
}

export default App;
