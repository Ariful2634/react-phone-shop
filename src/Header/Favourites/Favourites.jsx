import { useEffect, useState } from "react";


const Favourites = () => {
    const [fav,setFav]=useState([])
    useEffect(()=>{
        const getItem = localStorage.getItem('brand')
        const item = JSON.parse(getItem)
        setFav(item)
       
    },[])

    console.log(fav)

    return (
        <div>
            <h2>Favourites</h2>
        </div>
    );
};

export default Favourites;