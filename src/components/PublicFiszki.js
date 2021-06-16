import React from 'react';
import { useState } from 'react';
import {Card, Button, Carousel, Row, Col, Spinner} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap';
import {MyFetch} from './CustomFetch'
  
function PublicFiszki (){
    const [items, setItems] = useState(null);
      MyFetch("https://60c928797dafc90017ffc3bc.mockapi.io/api/fiszka", setItems);

      if (items == null) {
        return (
        <div>
          <MyCarousel/>
          Loading...
          <Spinner animation="border" role="status"></Spinner>
          
        </div>);
      } else {

        const cards = items.map(item => (
          <Card style={{width:'auto'}}>
            {/*<Card.Img variant="top" src="holder.js/100px180" />  image placeholder*/}
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
              <LinkContainer to={`/fiszkaSet/${item.id}`}>
                <Button
                  variant="outline-dark"
                  size="lg">
                  Choose Set
                </Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        ));

        return (
          <div>
              <MyCarousel/>
              <BuildCards cards={cards}/>
          </div>
        );
      }
}

function MyCarousel(){
  return (
      <Carousel class="text-light bg-dark">
        <Carousel.Item class="text-light bg-dark">
          <Carousel.Caption class="text-light bg-dark" style={{textAlign: "center"}}>
            <h3>Welcome to Fiszki!</h3>
            <p><br/></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption class="text-light bg-dark" style={{textAlign: "center"}}>
            <h3>Choose your favourite</h3>
            <p><br/></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption class="text-light bg-dark" style={{textAlign: "center"}}>
            <h3>Have fun :D</h3>
            <p><br/></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>);
}

function BuildCards({cards}){
  const resultsRender = [];

   for(let i = 0; i < cards.length; i+=4){
     resultsRender.push(
        <Row lg='4' md='1' sm='1' xs='1'>
        {
          cards.slice(i, i + 4)
            .map(card => (
              <Col>
                {card}
              </Col>
            ))
        }
        </Row>
      );
   }
   return resultsRender;
}
  
export default PublicFiszki;