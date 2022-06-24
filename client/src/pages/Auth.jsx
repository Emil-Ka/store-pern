import {Container, Card, Form, Button, Row} from 'react-bootstrap';
import {NavLink, useLocation} from 'react-router-dom';


import { REGISTRATION_ROUTE, LOGIN_ROUTE } from '../utils/constants';

export const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      className='d-flex flex-column justify-content-center align-items-center'
      style={{height: window.innerHeight - 54}}>
      <Card 
        style={{width: 600}}
        className='p-5'>
        <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-5'
            placeholder='Введите email'/>
          <Form.Control
            className='mt-3'
            placeholder='Введите пароль'/>
          <div className='mt-3 d-flex justify-content-between pl-3 pr-3'>
            {
              isLogin ? 
              <div>
                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегестрируйся!</NavLink>
              </div>
              :
              <div>
                Есть аккаунта? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            }
            
            <Button
              variant='outline-success'>
              {
                isLogin ? 'Войти' : 'Зарегестрироваться'
              }
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};