import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  Router,
  Route,
  RootRoute,
} from '@tanstack/react-router';

import './index.css';
import App from './App';
import BookList from "./BookList";
import BookDetails from './BookDetails';

// Create a root route
const rootRoute = new RootRoute({
  component: App,
})

function Index() {
  return (
    <div>
      <h3>Welcome Home!</h3>
    </div>
  )
}

// Create an index route
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

const booksListRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'books',
  component: BookList
})

const bookRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/book/$id/view',
  component: BookDetails,
})

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([indexRoute, booksListRoute, bookRoute])

// Create the router using your route tree
const router = new Router({ routeTree })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);

