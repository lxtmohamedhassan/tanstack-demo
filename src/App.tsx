import About from "./components/About";
import Home from "./components/Home";

import {
  Outlet,
  Link,
  Router,
  Route,
  RootRoute,
  lazy,
} from '@tanstack/router'
import Products from "./components/Products";
import ProductsDetails from "./components/ProductsDetails";
import Posts from "./components/Posts";
import PostInfo from "./components/PostInfo";

const rootRoute = new RootRoute({
  component: App,
})

const indexRoute = new Route({ getParentRoute: () => rootRoute, path: '/' })
const homeRoute = new Route({ getParentRoute: () => rootRoute, path: 'home', component: Home })
const postsRoute = new Route({ getParentRoute: () => rootRoute, path: 'posts', component: Posts, })
const singlePostRoute = new Route({
  getParentRoute: () => postsRoute,
  path: "$postId",
  component: PostInfo,
})

const aboutRoute = new Route({ getParentRoute: () => rootRoute, path: '/about', component: () => <About /> })

const productsRoute = new Route({ getParentRoute: () => rootRoute, path: 'products', component: Products,  })
const singleProductRoute = new Route({
  getParentRoute: () => productsRoute,
  path: "$id",
  component: ProductsDetails
})


const routeTree = rootRoute.addChildren([
  indexRoute,
  homeRoute,
  aboutRoute,
  productsRoute.addChildren([singleProductRoute]),

  postsRoute.addChildren([singlePostRoute])
])

export const router = new Router({ routeTree })

declare module '@tanstack/router' {
  interface Register {
    router: typeof router
  }
}

function App() {

  return (
    <>
      <h1>This app component</h1>
      <Link to="/home">Home</Link>
      <br />
      <Link to="/posts">Posts</Link>
      <br />
      <Link to="/posts/$postId" params={{ postId: '5' }}>Product 5</Link>
      <br />
      <Link to="/products" activeOptions={{exact: true}}>Products</Link>
      <br />
      <Link to="/products/$id" params={{ id: '5' }}>Product 5</Link>
      {/* <Link to="/about">About</Link>
      
      <br />
       */}
      <Outlet />
    </>
  )
}

export default App
