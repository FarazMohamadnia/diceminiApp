import './circleimage.css'
export default function CircleImageComponent({scale , BgImage , borderImg}){
    return(
        <div style={{backgroundImage : `url(${borderImg})` , transform:`scale(${scale})`}} className='CircleImageComponent-container'>
            <img alt='' src={BgImage}/>
        </div>
    )
}