import { Link, useLocation } from "react-router-dom"


export const SecondPage = () => {
    const location = useLocation()
    
    const backLink = location.state?.from??'/'
    return (
        <>
        <h1>SecondPage</h1>
        <Link to={backLink}>BackLink</Link>
        </>
    )
}