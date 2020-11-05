import React, { useState, useEffect } from 'react'
import { Container, Icon, Card,  CardInfo,  Content } from './styles';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import 'primeicons/primeicons.css';
import api from '../../services';



 function Screen2 (){  
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    setLoading(true);
      api
      .get(`/servicos`)
      .then((res) => {
        setCards(res.data);
        console.log(res.data)
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

 

 useEffect(() => {
    setFilteredCountries(
      
     cards.filter(card => {
      if(card.categoria_id === 1) {
        card.categoria_id = 'encanador'
      } else if(card.categoria_id === 2) {
        card.categoria_id = 'eletricista'
      } else {
        card.categoria_id = 'chaveiro'
      }
       return (
         card.telefone 
       )
     }
     )
      
    );
 
  }, [ cards]);

  if (loading) {
    return <p>Carregando prestadores de serviços...</p>;
  }
  return (
    <Container>

        <Icon>
          <Link to="/">
            <FiLogOut />
          </Link>
        </Icon>

      <h1>Lista de prestadores</h1>
    
      {filteredCountries.map((country, idx) => (
        <CountryDetail key={idx} {...country} />
      ))}
    </Container>
  );
}

const CountryDetail = (props) => {
  const { nome, telefone, categoria_id} = props;
  
  return (
    <>
 
      <Content>
        <Card>
         <CardInfo>
            <p><span className="title">Nome: </span>{nome}</p>
            <p><span className="title">Profissão: </span>{categoria_id}</p>
            <p><span className="title">Telefone: </span>{telefone}</p>
          </CardInfo>
        </Card>
      </Content>
 
    </>
  );
};

  

export default Screen2;