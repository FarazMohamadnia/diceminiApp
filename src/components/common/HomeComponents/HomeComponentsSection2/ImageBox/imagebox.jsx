import './imagebox.css'
import testImage from '../../../../../asset/img/HomeImg/carouselImage/image1.png'
import { Link } from 'react-router-dom'
export default function Imagebox({picture , name , game_url}){
    return(
        <Link to={`/games/${game_url}`}>
            <div style={{backgroundImage : `url(${picture})`}} className="imageBox-container">
                <p className='imageBox-p-style w-full text-[11px] text-white h-[18px] flex justify-center items-center'>{name}</p>
            </div>
        </Link>
    )
}