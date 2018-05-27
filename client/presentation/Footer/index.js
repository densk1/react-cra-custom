import React from 'react';

import Jumbotron from '../../container/BootStrap/Jumbotron';
import Container from '../../container/BootStrap/Container';
import Button from '../../container/BootStrap/Button';

import Row from '../../container/BootStrap/Row';
import Col from '../../container/BootStrap/Col';

function Footer() {
  return (
    <Jumbotron fluid>
      <Container fluid>
        <Row>
          <Col center sm={3}>
            <Button
              className="pl-5 pr-5"
              theme="orange"
              onClick={() => alert('clicked fn')}
              label="Click"
            />
          </Col>
          <Col center sm={3}>
            <Button
              className="pl-5 pr-5"
              theme="secondary"
              onClick={() => alert('clicked fn')}
              label="Click"
            />
          </Col>
          <Col center sm={3}>
            <Button
              className="pl-5 pr-5"
              theme="primary"
              onClick={() => alert('clicked fn')}
              label="Click"
            />
          </Col>
          <Col center sm={3}>
            <Button
              className="pl-5 pr-5"
              theme="indian"
              onClick={() => alert('clicked fn')}
              label="Click"
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
}

Footer.displayName = 'Footer';

export default Footer;
