import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

export default function ProductSearch() {
    const [searchParam] = useSearchParams();
    const navigate = useNavigate();
    const [search, setSearch] = useState(searchParam.get("search") || "");
    
    function handleChange(e) {
        setSearch(e.target.value);
    }
    
    function handleSearch() {
        if (search) {
            navigate({
                pathname: "/data/products/search",
                search: `?search=${search}`
            })
        }
    }

    return (
        <>
            <h1>Search Product</h1>
            
            <input type="text" placeholder="Type product name.." value={search} onChange={handleChange}/>
            <button onClick={handleSearch}>Search</button>

            <p>
                Searched product : {searchParam.get("search")}
            </p>
        </>
    )
}