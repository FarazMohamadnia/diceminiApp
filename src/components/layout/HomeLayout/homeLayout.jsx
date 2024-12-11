import Carousel1 from "../../common/HomeComponents/HomeComponentsSection1/carousel";
import HomePageSection2 from "../../common/HomeComponents/HomeComponentsSection2/homepage2";


export default function HomeLayout(){
    return(
        <div>
            <div>
                <Carousel1 />
            </div>
            <div>
                <HomePageSection2 />
            </div>
        </div>
    )
}