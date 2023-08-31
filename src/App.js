import './App.css';
import Navigation from "../src/Components/Navigation"
import Sidebar from "../src/Components/Sidebar"
import Container from "./Container"

function App() {
  return (
    <div className="App">
      <div className="navigation"> 
        <Navigation />
      </div>
      <div className="body">

        <div className="side-bar">
          <Sidebar />
        </div>
        <div className="contenue">

        <Container />


        </div>
      </div>

    </div>
  );
}

export default App;
