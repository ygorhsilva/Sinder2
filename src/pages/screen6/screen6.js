import React, { useRef } from 'react'
import { Link } from "react-router-dom"
import { Form } from '@unform/web'
import Select from '../../components/select'

import { Container, Content, Icon } from './styles.js';
import { FiArrowLeft } from 'react-icons/fi';
import Input from '../../components/input';
import { useHistory} from 'react-router-dom';
import api from '../../services';


function Screen6() {
  const history = useHistory();
  const formRef = useRef(null);
  const options = [
  { value: 1, label: 'Encanador' },
  { value: 2, label: 'Eletricista' },
  { value: 3, label: 'Chaveiro' }
]

const customStyles = {
  option: provided => ({
    ...provided,
    color: 'black'
  }),
  control: provided => ({
    ...provided,
    color: 'black'
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'black'
  })
}
  function handleSubmit(data, { reset }) {
    console.log(data);
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
        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1> Sinder </h1>
            <h2> Nome: </h2>
            <Input name="nome" />
            <h2> Telefone: </h2>
            <Input name="telefone" />
            <h2> Email: </h2>
            <Input  name="email" />
            <h2> Senha: </h2>
            <Input  name="senha" type="password" />
            <h2> Tipo: </h2>
                <Select name="categoria_id" options={options} styles={customStyles} placeholder='Tipo de Serviço'   theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
          ...theme.colors, 
            neutral90: 'black',
            primary25: 'white',
          },
        })}/>  
            <button type="submit">Cadastrar</button>
          </Form>
        </Content>
      </Container>
    </>
  )
}
export default Screen6;