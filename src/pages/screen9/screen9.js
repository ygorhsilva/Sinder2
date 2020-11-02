import React from 'react';
import {Link} from "react-router-dom";
import {  } from './styles';

function Screen9 (){
  return(
  <> 
  <div className="App">
    <header className="App-header">
      <h1 className= "h1"> Sinder </h1>
    </header>  
  </div>
  <div className="menu">
    <h2>Cadastro Editado com </h2> 
    <h2>Sucesso!</h2>
    <Link to="/">
    <button>Tela inicial</button>
    </Link>
  </div>
  </>
  )
}
export default Screen9;