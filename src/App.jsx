import { BrowserRouter, useRoutes } from 'react-router-dom';

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
import { FilterProvider } from './context/filters';
// import { ProductDetail } from './components/ProductDetail';
import { ProductDetail } from './pages/ProductDetail';

//css
import './App.css';
import { AuthProvider } from './context/auth';
import { useCart } from './hook/useCart';

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
      path: '/product/:id',
      element: <ProductDetail />,
    },
    {
      path: '/*',
      element: <NotFound />,
    },
  ]);
  return routes;
};

function App() {
  const { isCheckoutSideMenuOpen } = useCart();
  let isViewTransition =
    "Opss, Your browser doesn't support View Transitions API";
  if (document.startViewTransition) {
    isViewTransition = 'Yess, Your browser support View Transitions API';
  }
  return (
    <FilterProvider>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          {isCheckoutSideMenuOpen && <CheckoutSideMenu />}
          <Layout>
            <AppRoutes />
          </Layout>
          <footer>
            <a href='/'>Complete tutorial on Medium</a>
            <p>{isViewTransition}</p>
          </footer>
        </BrowserRouter>
      </AuthProvider>
    </FilterProvider>
  );
}

export default App;
