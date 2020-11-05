import React, { useRef } from 'react'
import { Link } from "react-router-dom"
import { Form } from '@unform/web'

import { Container, Content, Icon, Header } from './styles.js';
import { FiArrowLeft } from 'react-icons/fi';
import Input from '../../components/input';
import { useHistory} from 'react-router-dom';
import api from '../../services';


function Screen5() {
  const history = useHistory();
  const formRef = useRef(null);
  function handleSubmit(data, { reset }) {
    api.post('/servicos', data)
    history.push('/cadastroconcluido');
  }

  return (
    <>
      <Container>
        <Icon>
          <Link to="/cadastrar">
            <FiArrowLeft />
          </Link>
        </Icon>
         <Header>
           <h1> Sinder </h1>
        </Header>
        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h2> Nome: </h2>
            <Input name="nome" />
            <h2> Email: </h2>
            <Input  name="email" />
            <h2> Senha: </h2>
            <Input  name="senha" type="password" />
            <button type="submit">Cadastrar</button>
          </Form>
        </Content>
      </Container>
    </>
  )
}
export default Screen5;