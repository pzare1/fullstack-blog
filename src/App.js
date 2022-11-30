import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Single from './Pages/Single';
import Write from './Pages/Write';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="login" element={ <Login/> } />
        <Route path="register" element={ <Register/> } />
        <Route path="post/:id" element={ <Single/> } />
        <Route path="write" element={ <Write/> } />
      </Routes>
    </BrowserRouter>
    <div className="App">

    </div>
    </>
  );
}

export default App;
