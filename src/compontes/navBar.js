const NavBar = () => {
    return(
        <nav className="navbar">
            <h1>
                The Babu B(V)log
                </h1>
                <div className="links">
                    <a href="/">Home</a>
                    <a href="/create" style={{
                        color: "white",
                        backgroundColor: "#f1356d",
                        borderRadius: "8px"
                     }}>New Blog</a>
                    </div>     
                </nav>


    );
}
export default NavBar;