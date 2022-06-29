import {Routes, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {authRoutes, publicRoutes} from '../routes';

import {Shop} from '../pages/Shop';

export const AppRouter = () => {
  const {isAuth} = useSelector(state => state.user);
  console.log('isAuth ', isAuth);

  return (
    <Routes>
      {
        publicRoutes.map(({path, component}) => 
          <Route key={path} path={path} element={component()}/>
        )
      }
      {
        isAuth && authRoutes.map(({path, component}) => 
          <Route key={path} path={path} element={component()}/>
        )
      }
      <Route path='*' element={<Shop/>}/>
    </Routes>
  );
};