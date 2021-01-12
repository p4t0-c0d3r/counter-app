import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FotoPerfil from '../src/img/IMG_0125.jpg';
import Svg1 from '../src/svg/001-robotics.svg';
import Svg2 from '../src/svg/004-machine learning.svg';
import Svg3 from '../src/svg/014-cloud.svg';
import Svg4 from '../src/svg/044-global.svg';

/*
    PROPS se puede desestructurar
*/
const PrimeraApp = ({titulo, item}) => {
    return(
        <>
            <Container className="container1">
                <Row className='row'>
                    <Col className='col-xs-2'><img src={FotoPerfil} height='200px' /></Col>
                    <Col><b>Escribe algo sobre ti</b><p>Corto, preciso, donde respondas quién eres, qué haces y en qué quieres trabajar. No olvides tus datos de contacto.</p></Col>
                </Row>
            </Container>
            <Container className="container2">
                <Row className='row'>
                    <Col><img src={Svg1} height='100px' /></Col>
                    <Col><img src={Svg2} height='100px' /></Col>
                    <Col><img src={Svg3} height='100px' /></Col>
                </Row>
            </Container>
            <Container className="container3">
                <Row className='row'>
                    <Col className='col-xs-2'><img src={Svg4} height='100px' /></Col>
                    <Col><b>Especificación de área en la que trabajo</b><p>Así mostrarás más seguridad de tus habilidades y será fácil identificar el potencial de tus aportes en un nuevo trabajo.</p></Col>
                </Row>
            </Container>
            <Container className="container4">
                <h1>{titulo}</h1>
                <ul>
                    <li>{item}</li>
                    <li>¿Quieres dar a conocer tu trabajo?</li>
                </ul>
                <h1>2. Define donde vivirá tu portafolio</h1>
                <ul>
                    <li>Tener un sitio web es un plus muy valioso</li>
                </ul>
                <h1>3. Pro tips</h1>
                <ul>
                    <li>Mantenlo actualizado</li>
                    <li>Agrégalo en Linkedin y en inglés</li>
                    <li>Cuida otografía y redacción</li>
                </ul>
                <h1>4. Muestra tu experiencia y trabajos relevantes</h1>
                <ul>
                    <li>También proyectos y colaboraciones</li>
                    <li>Destaca las habildiades que desarrollaste</li>
                </ul>
            </Container>
        </>
    );
}

PrimeraApp.propTypes = {
    titulo: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
    parrafo: 'Soy párrafo para describir un item'
}


export default PrimeraApp;
