import Circle from './Components/circle';
import './style.css'
import { useState } from "react"
import DtsCoin from './Components/dtsCoin';
export default function NavbarProgressbar(){
    const [Number , setNumber]=useState(20);
    const result = 21 - Number
    return(
        <div>
            <div className='flex'>
                {
                    Array.from({ length: Number }, (_, index) => (
                        <DtsCoin key={index} />
                    ))
                }
                {
                    Array.from({ length: result }, (_, index) => (
                        <Circle key={index} />
                    ))
                }
            </div>
        </div>
    )
}