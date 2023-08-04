import './App.css';
import Home from './Pages/Home'
import {COLORS} from './constants/colors/index';


function App() {
  return (
    <div className="App" style={{backgroundColor:COLORS.back}} >
      <Home/>
    </div>
  );
}

export default App;
