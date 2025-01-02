import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Thunder from "../../../icons/thunder";
export default function HomeProgress(){
    const percentage = 80;
    return(
        <div>
            <div className="flex items-center">
                <p className="text-white text-[38px] font-bold">  +0.21 <span className="text-[#1ae5a1]">DTS</span></p>
                <div className="ml-2 mt-1 relative">
                    {/* <CircularProgressbar
                      value={percentage}
                      strokeWidth={5}
                      counterClockwise
                      className="w-7 h-7 bg-[#17171770] rounded-full"
                      styles={buildStyles({
                        pathColor: "#1AE5A1", // Green progress bar
                        trailColor: "#d6d6d600", // Background
                        textColor: "#FFFFFF", // Text color
                        textSize: "28px", // Text size
                      })}
                    /> */}
                    {/* <div className='absolute top-[6px] right-[3px]'> */}
                        {/* <p className="flex items-center text-[11px] text-white"><span className="">4/</span><span className="font-extralight text-[10px]">5</span> <span><Thunder /></span></p> */}
                    {/* </div> */}
                </div>
            </div>
            <div>
                <p className="text-white text-lg font-extralight tracking-[2.52px]">per each pair of </p>
            </div>
        </div>
    )
}