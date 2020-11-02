import React, { useRef } from 'react'
import { Link } from "react-router-dom"
import { Form } from '@unform/web'

import { Container, Content, Icon } from './styles.js';
import { FiArrowLeft } from 'react-icons/fi';
import Input from '../../components/input';
import { useHistory} from 'react-router-dom';
import api from '../../services';


function Screen8() {
  const history = useHistory();
  const formRef = useRef(null);
  function handleSubmit(data, { reset }) {
    api.post('/servicos', data)
    history.push('/edicaoconcluida');
  }

  return (
    <>
      <Container>
        <Icon>
          <Link to="/">
            <FiArrowLeft />
          </Link>
        </Icon>
        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1> Sinder </h1>
            <h2> Nome: </h2>
            <Input name="nome" />
            <h2> Telefone: </h2>
            <Input name="telefone" />
            <h2> Email: </h2>
            <Input  name="email" />
            <h2>Confirmar Senha: </h2>
            <Input  name="password" type="password" />
            <button type="submit">Salvar</button>
          </Form>
        </Content>
      </Container>
    </>
  )
}
export default Screen8;