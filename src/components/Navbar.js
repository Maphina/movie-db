import './home.css'
import React from "react";
import {Link, useHistory} from "react-router-dom";


const Navbar = () => {
    const history = useHistory();

    function redirect() {
        history.push('/home')
    }

    const searchHandler =(e)=>{
        console.log(e.target.value);
    }
    
    return ( 
        <nav className="text-light" >
            <span className="ml-xl"> <h1>Movie Online</h1></span> 
           <span className=" ml-xl" onClick={redirect}>Home </span>
            <Link to="/movies">Movies</Link>
            <Link to="/movies/popular">Popular</Link>
            <Link to="/movies/action">Action</Link>
            <Link to="/movies/comedy">Comedy</Link>
            <Link to="/movies/horror">Horror</Link>
            <Link to="/movies/romance">Romance</Link>
            <Link to="/movies/thriller">Thriller</Link>
            <span className="ml-xl"> 
            <input type="text"
            onChange={searchHandler}
            className="input" placeholder="Search for the movies"></input>
            <input type="submit" className="input" value="Search"></input>
            
            </span>
        </nav>
     );
    }
 
export default Navbar;