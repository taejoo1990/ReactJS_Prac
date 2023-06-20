
import { useEffect, useState } from "react";
import Movie from "../components/Movie.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFilm} from "@fortawesome/free-solid-svg-icons";
function Home(){

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const json = await (
            await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
        )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
        console.log(json);
    }
    useEffect (() => {
        getMovies();
    } , []);
    return(
        <div>
            {loading ? <h1>Loading...</h1> : 
            <div className="bg-gray-200 min-h-screen">
                <div className="flex">
                <h1 className="ml-20 mt-4 text-4xl font-bold text-sky-300/100"><FontAwesomeIcon icon={faFilm} /> Movies</h1>
                </div>
                {movies.map((item)=>
                <Movie  key={item.id}
                        id={item.id}
                        coverImg={item.small_cover_image} 
                        title={item.title} 
                        genres={item.genres} 
                        rating={item.rating}
                        />)}
            </div>
            }
        </div>
    ) 
}
 export default Home;