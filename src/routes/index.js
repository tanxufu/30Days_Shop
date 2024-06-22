import { HasFooterLayout } from '~/components/Layout';

import Home from '~/pages/Home';
import Favourites from '~/pages/Favourites';
import History from '~/pages/History';
import Products from '~/pages/Products';
import Cart from '~/pages/Cart';
import Login from '~/pages/Login';
import Admin from '~/pages/Admin';
import ForgotPassword from '~/pages/ForgotPassword';
import Register from '~/pages/Register';

// public
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/favourites', component: Favourites },
    { path: '/history', component: History },
    { path: '/products', component: Products },
    { path: '/cart', component: Cart },
    { path: '/admin', component: Admin },
    { path: '/login', component: Login, layout: HasFooterLayout },
    { path: '/forgotpassword', component: ForgotPassword, layout: HasFooterLayout },
    { path: '/register', component: Register, layout: HasFooterLayout },
];

// private
const privateRoutes = [];

export { publicRoutes, privateRoutes };
