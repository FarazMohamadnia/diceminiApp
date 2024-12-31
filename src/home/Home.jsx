import Bottonlink from "../components/global/BottonLink/bottonlink";
import Navbar from "../components/global/Navbar/navbar";
import HomeLayout from "../components/layout/HomeLayout/homeLayout";
// V2
export default function Home(){
    return(
        <div>     
            <Navbar />
            <HomeLayout />        
            <Bottonlink />
        </div>
    )
}