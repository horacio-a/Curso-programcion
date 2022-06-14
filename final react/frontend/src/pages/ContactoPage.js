import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const ContactoPage = (props) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <p>

                            Otros medios de conctactos
                        </p>
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
                                <Form.Control as="textarea" rows={3}placeholder="Deje su mensaje, lo atenderemos en 2 dias habiles." />
                            </Form.Group>
                            <Button variant="light" type="submit">
                                Enviar
                            </Button>
                        </Form>
                    </Col>



                </Row>
            </Container>

        </div>



    );
}
export default ContactoPage;