import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MineraPage() {
    return (
        <div>
            <div class='barraseparar'></div>
            <div id='titulos'>
                <h2>Mineria con GPU</h2>
            </div>
            <div class='barraseparar'></div>
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem'  }}>
                            <Card.Img variant="top" src="imagenes/rig 580.jpg" style={{height: '255px'}} />
                            <Card.Body>
                                <Card.Title>Rig de Rx 580</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div class='centrar'>
                                <Button variant="outline-light">Comprar</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="imagenes/rig 3060.webp" style={{height: '255px'}}/>
                            <Card.Body>
                                <Card.Title>Rig de RXT 3060</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div class='centrar'>
                                <Button variant="outline-light">Comprar</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="imagenes/rig 3070.webp" style={{height: '255px'}}/>
                            <Card.Body>
                                <Card.Title>Rig de RXT 3070</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div class='centrar'>
                                <Button variant="outline-light">Comprar</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="imagenes/rig 3090.webp"style={{height: '255px'}} />
                            <Card.Body>
                                <Card.Title>Rig de RXT 3090</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div class='centrar'>
                                <Button variant="outline-light">Comprar</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <div class='barraseparar'></div>
            <div id='titulos'>
                <h2>Mineria con ASICS</h2>
            </div>
            <div class='barraseparar'></div>
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="imagenes/Whatsminer M30S++.jpg" style={{height: '255px'}} />
                            <Card.Body>
                                <Card.Title>Whatsminer M30S++</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div class='centrar'>
                                <Button variant="outline-light">Comprar</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="imagenes/Antminer-S19-pro.jpg" style={{height: '255px'}}/>
                            <Card.Body>
                                <Card.Title>Bitmain Antminer S19 Pro</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div class='centrar'>
                                <Button variant="outline-light">Comprar</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="imagenes/ipollo-B2.jpg" style={{height: '255px'}} />
                            <Card.Body>
                                <Card.Title>iPollo B2</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div class='centrar'>
                                <Button variant="outline-light">Comprar</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="imagenes/Antminer-S19j-Pro.jpg" style={{height: '255px'}} />
                            <Card.Body>
                                <Card.Title>Bitmain Antminer S19j Pro</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div class='centrar'>
                                <Button variant="outline-light">Comprar</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </div>
    );
}

export default MineraPage;