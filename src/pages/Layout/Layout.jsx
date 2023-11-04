import { Link, Outlet, useLocation } from "react-router-dom"


export const Layout = () => {
    const location = useLocation()
    return (
        <>
        <Link state={{from:location}} to="main">MainPage</Link>
        <Link state={{from:location}} to="first">FirstPage</Link>
        <Link state={{from:location}} to="second">SecondPage</Link>
        <Outlet fallback={null} />
        </>
    )
}