import './App.css';
import Menu from './Components/Menu/Menu';
import Storefront from './Components/Storefront/Storefront';

function App() {
  return (
    <div className="App">
      <Menu />
      <Storefront category="jewelery"/>
    </div>
  );
}

export default App;
