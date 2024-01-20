import './App.css'
import Sidebar from './componemts/sidebar/Sidebar';
import MainDash from './componemts/MainDash/MainDash';
import RightSide from './componemts/RightSide/RightSide';
function App() {
  return (
    <div className="App">
        <div className="AppGlass">
          <Sidebar/>
          <MainDash/>
          <RightSide/>
        </div>
    </div>
  );
}

export default App;
