import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/03-Footer/index";
import MainDrawer from "./Components/01-Body/index";

function App() {
  return (
    <div style={{ backgroundColor: "#bfd1e5" }} className='App'>
      <MainDrawer />
      <Footer />
    </div>
  );
}

export default App;
