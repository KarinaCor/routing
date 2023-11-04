import { Link, useLocation } from "react-router-dom"


export const FirstPage = () => {
    const location = useLocation()
    console.log(location);
    const backLink = location.state?.from??'/'
    return (
        <>
        <h1>FirstPage</h1>
        <Link to={backLink}>BackLink</Link>
        </>
    )
}