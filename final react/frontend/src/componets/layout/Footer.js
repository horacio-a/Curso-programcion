import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {
    return (
        <footer>
            <Container fluid>
            <div className='barraseparar'></div>
                <Row>
                    <Col xs={3}></Col>
                    <Col><a href="https://www.facebook.com"> <i class="fa-brands fa-facebook-square"></i></a></Col>
                    <Col><a href="https://twitter.com/home"> <i class="fab fa-twitter"></i></a></Col>
                    <Col><a href="https://www.google.com"><i class="fab fa-google"></i></a></Col>
                    <Col><a href="https://www.instagram.com"> <i class="fa-brands fa-instagram"></i></a></Col>
                    <Col><a href="https://linkedin.com/home"> <i class="fab fa-linkedin"></i></a></Col>
                    <Col><a href="https://www.github.com"> <i class="fab fa-github"></i></a></Col>
                    <Col xs={3}></Col>
                </Row>
            </Container>
            <div className='barraseparar'></div>
            <Container>
                <Row>
                    <Col>
                        <h6 class="text-uppercase fw-bold mb-4">
                            <i class="fas fa-gem me-3"></i>Criptoword
                        </h6>
                        <p >
                            Somos una empresa dedicada al mundo crypto.
                            Traemos soluciones para las personas que no están dentro de este maravilloso mundo,
                            facilitando el staking y la adquisición de NFTs y estableciendo los mejores precio en la
                            minería con los rig´s y asic´s

                        </p>
                    </Col>
                    <Col><h6 class="text-uppercase fw-bold mb-4">
                            Nuestros servicios
                        </h6>
                        <p>
                            <a href="/Mineria" >Mineria</a>
                        </p>
                        <p>
                            <a href="/Staking" >Staking</a>
                        </p>
                        <p>
                            <a href="/NFT" >NFT</a>
                        </p>
                        <p>
                            <a href="/Criptocard">Cryptocard</a>
                        </p>
                    </Col>
                    <Col>
                    <h6 class="text-uppercase fw-bold mb-4">
                            FAQ
                        </h6>
                        <p>
                            <a href="/" >Medio de pago</a>
                        </p>
                        <p>
                            <a href="/">Configuraciones</a>
                        </p>
                        <p>
                            <a href="/">Ayuda</a>
                        </p>

                    </Col>
                    <Col>
                    <h6 class="text-uppercase fw-bold mb-4">
                            Contacto
                        </h6>
                        <p><i class="fas fa-home me-3"></i>Neuquen, nqn 8324, AR</p>
                        <p>
                            <i class="fas fa-envelope me-3"></i>
                            Horaciomatiasalbornoz@gmail.com
                        </p>
                        <p><i class="fas fa-phone me-3"></i>+54 299 5------</p>
                        <p><i class="fas fa-print me-3"></i>+54 011 5------ </p>
                    </Col>

                </Row>
            </Container>
        </footer>
    );
}

export default Footer;