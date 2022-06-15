import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const ContactoPage = (props) => {
    return (
        <div>
            <div class='barraseparar'></div>
            <div id='titulos'>
                <h2>Contacto</h2>

            </div>
            <div class='barraseparar'></div>

            <Container >
                <Row>
                    <Col>
                        <div class='texto2'>
                            <div class='titulos2'>
                                Otros medios de conctactos
                            </div>
                            <div class='barraseparar2'></div>
                            <p>
                                Telefono cede Buenos Aires: 011-5524168
                            </p>
                            <p>
                                Telefono Cede Neuquen: 299-5758449
                            </p>
                            <p>
                                Email de consultas: Criptoword@gmail.com
                            </p>
                            <p>
                                Email de ventas: Criptowordventas@gmail.com
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Nombre" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Alpellido" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="asunto (Ventas-Consultas)" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="Text" placeholder="Numero de telefono" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} placeholder="Deje su mensaje, lo atenderemos en 2 dias habiles." />
                            </Form.Group>
                            <div class='centrar'>
                            <Button variant="light" class='btn'>Enviar</Button>
                            </div>
                        </Form>
                    </Col>



                </Row>
            </Container>

        </div>



    );
}
export default ContactoPage;