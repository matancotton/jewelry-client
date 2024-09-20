import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppProvider from './components/providers/AppProvider.jsx';
import Jewelry from './views/Jewelry.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  { path: '/:id', element: <Jewelry /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </ApolloProvider>
  </StrictMode>
);
