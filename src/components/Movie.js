import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from "@fortawesome/free-solid-svg-icons";
function Moive({id,coverImg, title, rating}){
    return (
    <div className="text-2xl text-700 bg-red-200/100 mt-10 ml-2 mr-2 rounded-lg shadow-md transition-colors duration-500 hover:bg-green-100">
        <div className="flex">
                <img src={coverImg} alt={title}/> 
                <div className="px-4 py-4 text-2xl font-bold text-red-500/100">  
                <Link to={`/movies/${id}`}>{title}</Link>
                </div>
        </div>
        <div className="px-12"><FontAwesomeIcon icon={faStar} style={{color: "#ffea40",}}/> {rating}</div>
    </div>       
    )
}
Moive.propTypes ={
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
};

export default Moive;