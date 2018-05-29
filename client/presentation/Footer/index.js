import React from 'react';

import Jumbotron from '../../container/BootStrap/Jumbotron';
import Container from '../../container/BootStrap/Container';

import Row from '../../container/BootStrap/Row';
import Col from '../../container/BootStrap/Col';

function Footer() {
  return (
    <Jumbotron fluid>
      <Container fluid>
        <Row>
          <Col />
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
}

Footer.displayName = 'Footer';

export default Footer;
