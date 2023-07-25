import {
  Router,
  Route,
  RootRoute,
  RouterProvider
} from '@tanstack/router'
import Root from './components/Root'
import Index from './components/Index'
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import ProductsDetails from './components/ProductsDetails';
import Posts from './components/Posts';
import PostInfo from './components/PostInfo';
import NotFound from './components/NotFound';

const rootRoute = new RootRoute({
  component: Root,
})

const indexRoute = new Route({ getParentRoute: () => rootRoute, path: '/', component: Index });
const homeRoute = new Route({ getParentRoute: () => rootRoute, path: '/home', component: Home });
const aboutRoute = new Route({ getParentRoute: () => rootRoute, path: '/about', component: About });

const productsRoute = new Route({ getParentRoute: () => rootRoute, path: '/products', component: Products });
const singleProductRoute = new Route({
  getParentRoute: () => productsRoute,
  path: "/$id",
  component: ProductsDetails
});

interface PostSearch {
  page?: number
  sortBy?: string
  sortOrder?: string
}

const postsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/posts',
  component: Posts,
  validateSearch: (search: Record<string, unknown>): PostSearch => {
    // validate and parse the search params into a typed state
    return {
      page: Number(search?.page),
      sortBy: search?.sortBy as string,
      sortOrder: search?.sortOrder as string
    }
  }
});

const singlePostRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/posts/$postId",
  component: PostInfo,
  getKey: ({ search }) => search
});


const notFoundRoute = new Route({ getParentRoute: () => rootRoute, path: '/*', component: NotFound });

const routeTree = rootRoute.addChildren([
  indexRoute,
  homeRoute,
  aboutRoute,
  productsRoute.addChildren([singleProductRoute]),
  postsRoute,
  singlePostRoute,
  notFoundRoute
])

const router = new Router({ routeTree })

declare module '@tanstack/router' {
  interface Register {
    router: typeof router
  }
}

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
