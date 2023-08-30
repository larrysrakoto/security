import './App.css';
import Navigation from "../src/Components/Navigation"
import Sidebar from "../src/Components/Sidebar"

function App() {
  return (
    <div className="App">
      <div className="navigation">
      <Navigation/>
      </div>
      <div className="side-bar">
      <Sidebar/>
      </div>
        
    </div>
  );
}

export default App;
