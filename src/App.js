import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RouteFile from './Components/Routes/RouteFile';

function App() {
  return (
    <>
      <BrowserRouter>
        <RouteFile />
      </BrowserRouter>
    </>
  );
}

export default App;
