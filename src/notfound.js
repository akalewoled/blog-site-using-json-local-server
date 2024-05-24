import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return (  
    <div className="notfound">
        <p>sorry </p>
        <h1>the page can't be found</h1>
        <Link to="/"> to the home Page</Link>

    </div>
    )
}
 
export default NotFound;