import React, { Fragment } from 'react';

import Container from '../../container/BootStrap/Container';
import Col from '../../container/BootStrap/Col';
import Row from '../../container/BootStrap/Row';
import Button from '../../container/BootStrap/Button';
import Input from '../../container/BootStrap/Form/Input';
import MyCard from '../Card';

const cardSizes = {
  sm: '6',
  md: '3',
};
function Header() {
  return (
    <Fragment>
      <Container
        pt="5"
        pb="5"
        fluid
        img="/img/ECS_6257.jpg"
        style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}
      >
        <Row pt="5" pb="5">
          <Col className="offset-0 offset-sm-4" center col={12} sm="4" />
          <Col
            className="rounded bg-white offset-1 offset-xs-2 offset-sm-3 offset-md-4"
            center
            p={2}
            col={10}
            xs={8}
            sm={6}
            md={4}
          >
            <img
              src="/img/amhLogo.png"
              className="bg-white p-4 border-50 rounded"
              style={{ height: '160px' }}
              alt="Logo"
            />
            <h6 className="text-grey small text-muted">
              {'Abbeyleix, Co. Laois, Ireland'}
            </h6>
            <Container fluid="">
              <Row p="0">
                <Col col="12">
                  <Input
                    className="w-100"
                    placeholder="Arrival Date..."
                    type="text"
                    onChange={() => {}}
                    helper
                    helperText
                    error
                    errorText
                  />
                </Col>
              </Row>
              <Row p="0">
                <Col col="8">
                  <Input
                    className="w-100"
                    placeholder="No. of Nights..."
                    type="number"
                    onChange={() => {}}
                    helper
                    helperText
                    error
                    errorText
                  />
                </Col>
                <Col col="4">
                  <Input
                    className="w-100"
                    placeholder="No. of Guests..."
                    type="number"
                    onChange={() => {}}
                    helper
                    helperText
                    error
                    errorText
                  />
                </Col>
              </Row>
              <Row p="0" mb={3}>
                <Col col="12">
                  <Button
                    label="Book Now"
                    theme="gold"
                    outline
                    className="w-100"
                    onClick={() => {}}
                  />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container fluid >
        <Row>
          <Col center col="1" md="3" sm="2" xs="1" />
          <Col center col="10" md="6" sm="8" className="pb-3 py-sm-5" >
            <img src="/img/amhLogo.png" className="mb-4" style={{ height: '100px' }} alt="Logo" />
            <h2 className="text-gold text-bold mb-4">Our Mission</h2>
            <p className="text-muted">
              {`
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical literature, discovered the
                undoubtable source.
              `}
            </p>
            <Button lg label="button" theme="gold" outline className="w-50" onClick={() => {}} />
          </Col>
          <Col center col="1" md="3" sm="2" xs="1" />
        </Row>
      </Container>
      <Container pt="5" pb="5" fluid img="/img/ECS_6257.jpg" style={{ height: '50vw' }} />
      <Container fluid pt="5" pb="5" >
        <Row>
          <Col {...cardSizes}>
            <MyCard />
          </Col>
          <Col {...cardSizes}>
            <MyCard />
          </Col>
          <Col {...cardSizes}>
            <MyCard />
          </Col>
          <Col {...cardSizes}>
            <MyCard />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

Header.displayName = 'Header';

export default Header;
