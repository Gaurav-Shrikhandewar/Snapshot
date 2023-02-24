import React , { useContext } from "react";
import { Link } from "react-router-dom";
import { GalleryContext } from "../context/GalleryContext";



const Header = (event) => {

 const { setSearchQuery }  = useContext(GalleryContext);
 
 const handleSearch = (event) => {
    setSearchQuery(event.target.value);
 }

    return(
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <link to="/">All</link> 
                        </li>
                        <li>
                            <link to="/mountains">Mountains</link> 
                        </li>
                        <li>
                            <link to="/beaches">Beaches</link> 
                        </li>
                        <li>
                            <link to="/birds">Birds</link> 
                        </li>
                        <li>
                            <link to="/food">Food</link> 
                        </li>
                        <li>
                            <input type={"text"} placeholder="Search" onChange={handleSearch} />
                            <Link to="/Search" > 
                            <button>Search</button></Link>
                        </li>
                    </ul>
                </nav>
            </header>

        </div>
    )
}

export default Header ; 