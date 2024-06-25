import { HasFooterLayout } from '~/components/Layout';

import Home from '~/pages/Home';
import Favourites from '~/pages/Favourites';
import Products from '~/pages/Products';
import Cart from '~/pages/Cart';
import Login from '~/pages/Login';
import Admin from '~/pages/Admin';
import ForgotPassword from '~/pages/ForgotPassword';
import Register from '~/pages/Register';
import About from '~/pages/About';
import Policy from '~/pages/Policy';
import FAQ from '~/pages/FAQ';

// public
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/policy', component: Policy },
    { path: '/faq', component: FAQ },
    { path: '/favourites', component: Favourites },
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
