import Home from "../page/Home/Home"
import Login from "../page/Login/Login"
import Register from "../page/Register/Register"

interface RouteType {
    path: string,
    component: () => React.JSX.Element,
    layout?: any
}
const publicRoutes: RouteType[] = [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
]
const privateRoutes: RouteType[] = []
export { publicRoutes, privateRoutes }