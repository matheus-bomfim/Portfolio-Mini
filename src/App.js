import './App.css';
import Footer from './Components/Footer';
import Header from "./Components/Header"
import Routers from './Router/Router';
function App() {
  return (
    <div className="App">
        <Header/>
        <Routers/>
        <Footer/>
    </div>
  );
}

export default App;
