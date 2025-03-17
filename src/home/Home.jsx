import Bottonlink from "../components/global/BottonLink/bottonlink";
import { ButtonLinkV2 } from "../components/global/BottonLinksV2/bottonLinksV2";
import Navbar from "../components/global/Navbar/navbar";
import HomeLayout from "../components/layout/HomeLayout/homeLayout";
import Loading from "../pages/loading";
import useLoadingStore from '../store/loading'
// V2
export default function Home(){
    const {isLoading} = useLoadingStore()
    return(
        <>
        {isLoading ?
            <Loading />
            :
            <div className="">  
                <Navbar />
                <HomeLayout />        
                <Bottonlink /> 
            </div>
        }
        </>
    )
}