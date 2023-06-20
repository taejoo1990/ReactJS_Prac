import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons";
function Detail(){
    const {id} = useParams();
    const [movie, setMovie] = useState(JSON);
    const [short, setShort] = useState("");
    const [fullDisCrption, setFullDiscription] = useState(false);
    const [loading, setLoading] = useState(true);

    function onClick(){
        setFullDiscription((current) => !current);
    }
    const getMovie = async () =>{
        const json = await (await fetch("https://yts.mx/api/v2/movie_details.json?movie_id="+id)).json()
        setMovie(json.data.movie);
         setShort(json.data.movie.description_full.substr(0,50));
    }
    useEffect(() => {
        getMovie();
        setLoading(false);
    } , [])
    return ( 
        <div >
            {loading?<h1>Loading...</h1> : 
            <div>  
                <div className="center">
                    <h1 className="text-5xl font-bold text-sky-400/100">Movie Detail</h1>
                </div>
                
                <img src={movie.medium_cover_image} alt={movie.title}/>
                <h1>{movie.title}({movie.rating})</h1>
                <div className="text-lg text-black font-semibold"><FontAwesomeIcon icon={faThumbsUp} /> : {movie.like_count}</div>
                <div className="text-lg text-black font-semibold"> Discription :</div> 
                {fullDisCrption  ? 
                <div>
                    
                    <p className="px-4 text-slate-700" > {movie.description_full}<button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={onClick}>←</button></p> 
                </div> : 
                <div>
                    <p className="px-4 text-slate-700" >{short} <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={onClick}>...</button></p>
                   
                </div>    
                }
             </div>
            }
            </div>
        )
}
        
export default Detail;