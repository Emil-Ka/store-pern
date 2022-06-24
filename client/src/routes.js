import {Admin} from './pages/Admin';
import {Cart} from './pages/Cart';
import {Auth} from './pages/Auth';
import {Shop} from './pages/Shop';
import {DevicePage} from './pages/DevicePage';

import {ADMIN_ROUTE, CART_ROUTE, LOGIN_ROUTE, DEVICE_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from './utils/constants';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    component: Admin
  },
  {
    path: CART_ROUTE,
    component: Cart
  }
];

export const publicRoutes = [
  {
    path: REGISTRATION_ROUTE,
    component: Auth
  },
  {
    path: LOGIN_ROUTE,
    component: Auth
  },
  {
    path: SHOP_ROUTE,
    component: Shop
  },
  {
    path: DEVICE_ROUTE + '/:id',
    component: DevicePage
  }
]