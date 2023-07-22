import { useRoutes, BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context';

//pages
import { Home } from './pages/Home';
import { MyOrder } from './pages/MyOrder';
import { MyOrders } from './pages/MyOrders';
import { MyAccount } from './pages/MyAccount';
import { NotFound } from './pages/NotFound';

//components
import { Navbar } from './components/NavBar';
import { Layout } from './components/Layout';
import { CheckoutSideMenu } from './components/CheckoutSideMenu';
import { AccountForm } from './pages/AccountForm/AccountForm';
import { Navigate } from 'react-router-dom';
import { useAuth } from './hook/useAuth';

//css
import './App.css';
import { AuthProvider } from './context/auth';

const AppRoutes = () => {
  const { session } = useAuth();
  let routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/:category',
      element: session ? <Home /> : <Navigate replace to={'/sing-in'} />,
    },
    {
      path: '/my-orders',
      element: <MyOrders />,
    },
    {
      path: '/my-orders/last',
      element: <MyOrder />,
    },
    {
      path: '/my-orders/:id',
      element: <MyOrder />,
    },
    {
      path: '/my-order',
      element: <MyOrder />,
    },
    {
      path: '/my-account',
      element: <MyAccount />,
    },
    {
      path: '/sing-in',
      element: <AccountForm />,
    },
    {
      path: '/*',
      element: <NotFound />,
    },
  ]);
  return routes;
};

function App() {
  return (
    <CartProvider>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <CheckoutSideMenu />
          <Layout>
            <AppRoutes />
          </Layout>
        </BrowserRouter>
      </AuthProvider>
    </CartProvider>
  );
}

export default App;
