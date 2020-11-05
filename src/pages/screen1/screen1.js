import React, { useRef } from 'react'
import {Link} from "react-router-dom"
import { Container, Content, Icon, Header } from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import { useHistory} from 'react-router-dom';
import Input from '../../components/input'



import api from '../../services';

function Screen1 (){
  const history = useHistory();
  const formRef = useRef(null);
 async function handleSubmit({ email, senha }, { reset }) {
      try {
        const response = await api.get(`/servicos?q=${email}`)
        const id = response.data[0].id;
        console.log(response.data[0])
        if(response.data[0].email === email &&                 response.data[0].senha === senha) {
             if(response.data[0].telefone) {
            history.push(`/editarperfil/${id}`);
          } else {
            history.push('/navegar');
          }
        }  
        
      } catch (err) {
      console.log(err)
    }
   

   
  }
  return(
    <>
      <Container>
          <Icon>
            <Link to="/">
              <FiArrowLeft />
            </Link>
          </Icon>
        <Header>
           <h1> Sinder </h1>
        </Header>
        <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
            <h2> Email: </h2>
            <Input  name="email" />
            <h2> Senha: </h2>
            <Input  name="senha" type="password" />
            <button type="submit">Logar</button>
          </Form>
        </Content>
      </Container>
    </> 
  )
}
export default Screen1;