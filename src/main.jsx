import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CartProvider } from './context/cart.jsx';
import { AuthProvider } from './context/auth.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </CartProvider>
  </React.StrictMode>
);

// import { flushSync } from 'react-dom';
// import { createRoot } from 'react-dom/client';
// import {
//   useNavigate,
//   createBrowserRouter,
//   RouterProvider,
// } from 'react-router-dom';
// const AnimatedLink = ({ to, children }) => {
//   const navigate = useNavigate();
//   return (
//     <a
//       href={to}
//       onClick={(ev) => {
//         ev.preventDefault();
//         document.startViewTransition(() => {
//           flushSync(() => {
//             navigate(to);
//           });
//         });
//       }}
//     >
//       {children}
//     </a>
//   );
// };
// const TopBar = ({ link, rightContent }) => (
//   <div className='top-bar'>
//     <div className='top-bar-content'>
//       <h1>Move Cat</h1>
//       {link}
//     </div>
//     {rightContent}
//   </div>
// );
// const router = createBrowserRouter([
//   {
//     index: true,
//     element: (
//       <div>
//         <TopBar
//           link={<AnimatedLink to='/details'>Details</AnimatedLink>}
//           rightContent={
//             <img
//               src='https://res.cloudinary.com/djzsjzasg/image/upload/c_scale,w_300/v1678947391/malcolm-kee/meow_dtsn8h.png'
//               alt='cat'
//               className='cat-img thumbnail'
//             />
//           }
//         />
//       </div>
//     ),
//   },
//   {
//     path: '/details',
//     element: (
//       <div>
//         <TopBar link={<AnimatedLink to='/'>Home</AnimatedLink>} />
//         <div className='cat-details'>
//           <img
//             src='https://res.cloudinary.com/djzsjzasg/image/upload/c_scale,w_500/v1678947391/malcolm-kee/meow_dtsn8h.png'
//             alt='cat'
//             className='cat-img detailed-img'
//           />
//           <div className='cat-desc'>
//             <h2>Cat Details</h2>
//           </div>
//         </div>
//       </div>
//     ),
//   },
// ]);
// createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// );
