import { Col, Card, Image } from "react-bootstrap";
import {createBrowserHistory} from "history";
import {NavLink} from "react-router-dom";

import star from '../assets/icon/star.svg';

import {DEVICE_ROUTE} from '../utils/constants';

export const DeviceItem = ({device}) => {
  return (
    <Col md={3}>
      <NavLink to={DEVICE_ROUTE + '/' + device.id}>
        <Card style={{width: 150, cursor: 'pointer'}} border='light'>
          <Image src='https://c.ndtvimg.com/2020-11/165re19g_gadgets_640x480_17_November_20.jpg' alt='iphone' width={150}/>
          <div className='d-flex justify-content-between mt-2'>
            <h2 style={{fontSize: '18px', color: 'grey'}}>Samsung</h2>
            <div className='d-flex align-items-center'>
              <p>5</p>
              <Image width={14} src={star} alt='star'/>
            </div>
          </div>
          <h3 style={{fontSize: '16px', marginTop: '6px'}}>Galaxy 21 Ultra</h3>
        </Card>
      </NavLink>
    </Col>
  );
};