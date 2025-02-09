import Lottie from "lottie-react";
import animation from '../components/animation/diceloading.json'
export default function Loading(){
    return(
        <div>
            <div className="w-[400px] h-[400px]">
                <Lottie animationData={animation} loop={true} />
            </div>
        </div>
    )
}