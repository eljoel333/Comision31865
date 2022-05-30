
import './App.css';
import NavBar from './components/NavBar';
import Items from './components/Items';
import ItemList from './components/ItemList/ItemList';
import Counter from './components/Counter/Counter';
function App() {
  return (
    <div className='container'>
      <h1>Mi logo</h1>
       <NavBar></NavBar>
      <Items nombre='Mis Productos'></Items>
      <item></item>
     <Counter initial={1} stock={12} title='hola'></Counter>

    </div>
  );
}

export default App;
