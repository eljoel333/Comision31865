
import './App.css';
import NavBar from './components/NavBar';
import Items from './components/Items';


//importamos las pages

import Page1 from './container/Page1';
import Page2 from './container/Page2';
import Page3 from './container/Page3';

function App() {
  return (
    <div className='container'>
      <h1>Mi logo</h1>
       <NavBar></NavBar>
      <Items nombre='Mis Productos'></Items>

    </div>
  );
}

export default App;
