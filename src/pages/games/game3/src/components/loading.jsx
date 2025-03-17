import { tailChase } from 'ldrs'
import '../index.css'
const imgUrl = 'https://mini.dicemaniacs.com/asset/loading2'
tailChase.register()

export default function Loading(){
    return(
        <div className={`loading-img w-full h-[100vh] flex justify-center items-center flex-col `}>
            <l-tail-chase
              size="150"
              speed="2" 
              color="white" 
            ></l-tail-chase> 
        </div>
    )
}