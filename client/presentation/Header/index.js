import React from 'react';

import Container from '../../container/BootStrap/Container';
import Col from '../../container/BootStrap/Col';
import Row from '../../container/BootStrap/Row';

function Header() {
  return (
    <Container pt="5" pb="5" fluid img="/img/ECS_6257.jpg">
      <Row pt="5" pb="5">
        <Col>
          <Container fluid pt="5" pb="5" p="0" mt="5">
            <Row pt="5" pb="5">
              <Col sm="6" />
              <Col className="bg-white" sm="6">Booking Widget</Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>

  );
}

Header.displayName = 'Header';

export default Header;
