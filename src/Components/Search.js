import React , { useContext, useState } from "react";
import { GalleryContext }from "../context/GalleryContext";


const Search = () => {

    const [searchValue, setSearchvalue] = useState("");
    const { setSearchQuery } = useContext(GalleryContext);

    const handleSearch  = (e) => { 
        setSearchvalue(e.target.value);
        setSearchQuery(e.target.value);
    }
    
    return(
        <div>
          <input type={'text'} value={searchValue} onChange={handleSearch} />
        </div>
    )
}

export default Search ; 



