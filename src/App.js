import "./App.css";
import "@fontsource/montserrat";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Signin from "./screen/signin";
import Home from "./Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Signin/>}/>
        </Routes>
      </Router>

    </>
  );
}

export default App;
