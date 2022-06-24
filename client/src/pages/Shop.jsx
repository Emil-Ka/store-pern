import {useSelector} from 'react-redux';
import {Container, Col, Row} from 'react-bootstrap';
import TypeBar from './../components/TypeBar';
import { BrandBar } from '../components/BrandBar';
import { DeviceList } from '../components/DeviceList';

export const Shop = () => {
  return (
    <Container>
      <Row className='mt-3'>
        <Col md={2}>
          <TypeBar/>
        </Col>
        <Col md={9}>
          <BrandBar/>
          <DeviceList/>
        </Col>
      </Row>
    </Container>
  );
};