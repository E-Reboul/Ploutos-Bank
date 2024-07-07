//PAGE PRINCIPALE DE l'APPLICATION
import './App.css';
import {Card, Row, Col, Figure } from "react-bootstrap";
import ConnectionFormulaire from './components/ConnectionFormulaire';
import Logo from "./ploutos.png"
//<img src={Logo} alt="logo ploutos" />
function App() {
  return (
    <section className='BackGround'>
      <Row>
        <Col className='HomeCard'>
          <Card style={{ width: '24rem' }}>
            <Card.Body>
              <Card.Title>
                <Figure>
                  <Figure.Image
                    width={180}
                    height={180}
                    alt="171x180"
                    src={Logo}
                  />
                  <Figure.Caption>
                    "Gardien de votre héritage, architecte de votre prestige"
                  </Figure.Caption>
                </Figure>
              </Card.Title>
              <div className="d-grid gap-2" id='divGeneration'>
                <ConnectionFormulaire />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default App;
