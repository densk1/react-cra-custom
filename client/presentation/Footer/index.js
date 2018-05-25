import React from 'react';

import Jumbotron from '../../container/BootStrap/Jumbotron';
import Container from '../../container/BootStrap/Container';
import Button from '../../container/BootStrap/Button';

import Row from '../../container/BootStrap/Row';
import Col from '../../container/BootStrap/Col';

const Footer = () => (
  <Jumbotron fluid>
    <Container fluid>
      <Row>
        <Col center sm={4} style={{ backgroundColor: 'red' }}>Red</Col>
        <Col center sm={4} style={{ backgroundColor: 'green' }}>Green</Col>
        <Col center sm={4} >
          <Button
            theme="indian"
            onClick={() => alert('clicked fn')}
            label="Click"
            outline
          />
        </Col>
      </Row>
      <Row>
        <Col col={12} >
          <div className="text-muted small text-center p-2">
            Copyright 2018 &copy;
          </div>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

Footer.displayName = 'Footer';

export default Footer;
