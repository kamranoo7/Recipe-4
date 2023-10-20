
import './App.css';
import Allroutes from './Component/Allroutes';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import RecipeSearch from './Component/RecipeSearch';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Allroutes/>
    </div>
  );
}

export default App;
