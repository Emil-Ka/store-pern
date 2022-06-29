import {Container, Card, Form, Button} from 'react-bootstrap';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

import {setUser, setIsAuth} from '../redux/slices/userSlice';
import {registration, login} from '../http/userAPI';
import { REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/constants';

export const Auth = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  console.log('isLogin', isLogin);
  console.log(location);

  const auth = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
        console.log(data);
      } else {
        data = await registration(email, password);
        console.log(data);
      }
      dispatch(setUser(data));
      dispatch(setIsAuth(true));
      navigate(SHOP_ROUTE);
    } catch(err) {
      alert(err.response.data.message)
    }

    //return navigate(SHOP_ROUTE);
  }

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
            placeholder='Введите email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          <Form.Control
            className='mt-3'
            placeholder='Введите пароль'
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
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
              variant='outline-success'
              onClick={auth}>
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