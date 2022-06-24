import {useSelector, useDispatch} from 'react-redux';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';

import {SHOP_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE} from '../utils/constants';

import {setIsAuth} from '../redux/slices/userSlice';

export const NavBar = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink className='logo' to={SHOP_ROUTE}>Интернет магазин</NavLink>
          {
            user.isAuth 
              ?
            <Nav className="ml-auto">
              <NavLink to={ADMIN_ROUTE}>
                <Button variant='outline-light'>Админ панель</Button>
              </NavLink>
              <NavLink to={LOGIN_ROUTE}>
                <Button variant='outline-light'>Выйти</Button>
              </NavLink>
            </Nav> 
              :
            <Nav className="ml-auto">
              <NavLink to={ADMIN_ROUTE}>
                <Button variant='outline-light'>Админ панель</Button>
              </NavLink>
              <NavLink to={LOGIN_ROUTE}>
                <Button onClick={() => dispatch(setIsAuth(true))} variant='outline-light'>Авторизация</Button>
              </NavLink>
            </Nav>
          }
          
        </Container>
      </Navbar>
    </>
  );
};