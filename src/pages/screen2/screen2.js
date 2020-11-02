import React from 'react'
import {Link} from "react-router-dom"

import { Container, Content, Icon, Lup } from './styles.js';
import { FiLogOut } from 'react-icons/fi';
import lupiha from './branquela.png'


function Screen2 (){
  return(
  <>
  <Container>
    <Icon>
      <Link to="/">
          <FiLogOut />
      </Link>
    </Icon>
    <Content>
      <Lup>
        <input type="search" id="busca" name="q" />
        <Link to="/xdetalhes">
          <img src={lupiha} alt="lupinha"/> 
        </Link>
      </Lup>
      
      <h1> Sinder </h1>

      <Link to="/xdetalhes">
        Encanador
      </Link>
      <Link to="/xdetalhes">
        Eletricista
      </Link>
      <Link to="/xdetalhes">
        Chaveiro
      </Link>
    </Content>
  </Container>
  </>
  )
}
export default Screen2;