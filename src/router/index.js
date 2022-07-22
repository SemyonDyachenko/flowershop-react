import MainPage from '../pages/MainPage'
import CartPage from '../pages/CartPage'

import { MAIN_ROUTE, CART_ROUTE, ACCOUNT_ROUTE } from '../utils/constans'

export const routes = [
  { path: MAIN_ROUTE, component: <MainPage />, exact: true },
  { path: CART_ROUTE, component: <CartPage />, exact: true },
]

export const auth_routes = [
  ...routes,
  {
    path: ACCOUNT_ROUTE,
    component: <MainPage />,
    exact: true,
  },
]
