import React from "react";
import {Switch,Route,BrowserRouter} from "react-router-dom";

import Screen0 from "./pages/screen0/screen0"
import Screen1 from "./pages/screen1/screen1"
import Screen2 from "./pages/screen2/screen2"
import Screen3 from "./pages/screen3/screen3"
import Screen4 from "./pages/screen4/screen4"
import Screen5 from "./pages/screen5/screen5"
import Screen6 from "./pages/screen6/screen6"
import Screen7 from "./pages/screen7/screen7"
import Screen8 from "./pages/screen8/screen8"
import Screen9 from "./pages/screen9/screen9"

export default function Routes(){
  return(
    <>
    <BrowserRouter>
     <Switch>
       <Route path="/" exact component={Screen0} />
       <Route path="/login" component={Screen1} />
       <Route path="/navegar" component={Screen2} />
       <Route path="/xdetalhes" component={Screen3} />
       <Route path="/cadastrar" component={Screen4} />
       <Route path="/cadastrarusuario" component={Screen5} />
       <Route path="/cadastrarprestador" component={Screen6} />
       <Route path="/cadastroconcluido" component={Screen7} />
       <Route path="/editarperfil" component={Screen8} />
       <Route path="/edicaoconcluida" component={Screen9} />
     </Switch>
    </BrowserRouter>
    </> 
  );
}