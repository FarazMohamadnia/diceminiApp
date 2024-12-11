import './imagebox.css'
import testImage from '../../../../../asset/img/HomeImg/carouselImage/image1.png'
export default function Imagebox(){
    return(
        <div style={{backgroundImage : `url(${testImage})`}} className="imageBox-container">
            <p className='imageBox-p-style w-full text-[11px] text-white h-[18px] flex justify-center items-center'>GameName</p>
        </div>
    )
}