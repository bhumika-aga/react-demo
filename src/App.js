import './App.css';
import Welcome from "./components/Welcome";
import Greeting from "./components/Greeting";

function App() {
    return (
        <div className="App">
            <Greeting name="Bhumika"/>
            <Welcome/>
            <Welcome/>
        </div>
    );
}

export default App;
