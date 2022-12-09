
import "./App.css";
import Listar from "./componentes/Listar";
import Crear from "./componentes/Crear";
import  Editar from "./componentes/Editar";
import  Login from "./componentes/Login";
import  Home from "./componentes/Home";

import {  BrowserRouter,  Route,  Routes} from "react-router-dom";


function App() {
  return (

 
    <div className="container">

     
      <ul>
        <li><a href="/">Listar</a></li>
        <li><a href="/Crear">Crear</a></li>
        <li><a href="/Login">Login</a></li>
        <li><a href="/Home">Home</a></li>
      </ul>


  <BrowserRouter>
   <Routes>

    <Route path='/Crear' element={<Crear />}/>
    <Route path='/Editar/:id' element={<Editar />}/>
    <Route path='/' element={<Listar />}/>
    <Route path='/Login' element={<Login />}/>
    <Route path='/Home' element={<Home />}/>

    </Routes>
  </BrowserRouter>

  

    </div>
    
  );
}

export default App;

