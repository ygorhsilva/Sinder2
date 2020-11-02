import React from 'react'
import {Link} from "react-router-dom"
import { Container, Icon, Card, CardImage, CardInfo, Testimonials } from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import pereira from './ednaldo_pereira.png'
import irineu from './irineu.png'
import milos from './milos.jpg'
import 'primeicons/primeicons.css';


function Screen3 (){
  return(
    <>
      <Container>
        <Icon>
          <Link to="/navegar">
            <FiArrowLeft />
          </Link>
        </Icon>

        <Card>
          <CardImage>
            <img src={pereira} alt="pareira" />
          </CardImage>
          <CardInfo>
            <p><span className="title">Nome: </span>Ednaldo Pereira</p>
            <p><span className="title">Telefone: </span>(83) 691634256</p>
            <p><span className="pi pi-star" /> <span className="pi pi-star" /> <span className="pi pi-star" /> <span className="pi pi-star" /> <span className="pi pi-star" /></p>
          </CardInfo>

          <Testimonials>
            <p>"Vale nada, vale tudo."</p>  
          </Testimonials>
        </Card>

        <Card>
          <CardImage>
            <img src={irineu} alt="pareira" />
          </CardImage>
          <CardInfo>
            <p><span className="title">Nome: </span>Irineu</p>
            <p><span className="title">Telefone: </span>(27) 691678876</p>
            <p><span className="pi pi-star" /> <span className="pi pi-star" /> <span className="pi pi-star-o" /> <span className="pi pi-star-o" /> <span className="pi pi-star-o" /> </p>
          </CardInfo>

          <Testimonials>
            <p>"Você não sabe, nem eu."</p>  
          </Testimonials>
        </Card>

        <Card>
          <CardImage>
            <img src={milos} alt="pareira" />
          </CardImage>
          <CardInfo>
            <p><span className="title">Nome: </span>Ricardo Milos</p>
            <p><span className="title">Telefone: </span>(21) 6916-XXXX</p>

            <p><span className="pi pi-star" /> <span className="pi pi-star" /> <span className="pi pi-star" /> <span className="pi pi-star-o" /> <span className="pi pi-star-o" /> </p>
          </CardInfo>
          <Testimonials>
            <p>"You got that!!"</p>
            <audio id="applause" src="./pito"></audio>
          </Testimonials>
        </Card>
        
      </Container>
    </> 
  )
}
export default Screen3;