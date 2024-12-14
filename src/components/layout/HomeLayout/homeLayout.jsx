import Carousel1 from "../../common/HomeComponents/HomeComponentsSection1/carousel";
import HomePageSection2 from "../../common/HomeComponents/HomeComponentsSection2/homepage2";
import HomePage3 from "../../common/HomeComponents/HomeComponentsSection3/homepage3";
import Bottonlink from "../../global/BottonLink/bottonlink";


export default function HomeLayout(){
    return(
        <div>
            <div>
                <Carousel1 />
            </div>
            <div>
                <HomePageSection2 />
            </div>
            <div>
                <HomePage3 />
            </div>
            <div>
                <Bottonlink />
            </div>
        </div>
    )
}