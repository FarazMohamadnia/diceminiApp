import Navbar from "../components/global/Navbar/navbar";
import HomeLayout from "../components/layout/HomeLayout/homeLayout";

export default function Home(){
    return(
        <div>
            <div>
                 <Navbar />
            </div>
            <div>
                 <HomeLayout />
            </div>
        </div>
    )
}