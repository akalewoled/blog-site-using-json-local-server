import {Link} from 'react-router-dom';
const NavBar = () => {
    return(
        <nav className="navbar">
            <h1>
                The Babu B(V)log
                </h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/create" style={{borderRadius: "8px"}}>New Blog</Link>
                    
                    </div>     
                </nav>


    );
}
export default NavBar;