import Circle from './Components/circle';
import './style.css'
import { useState } from "react"
import DtsCoin from './Components/dtsCoin';
import useUserStore from '../../../store/user';

export default function NavbarProgressbar(){
    const { user } = useUserStore();
    const result = 21 - user.active_dots_balance
    return(
        <div>
            <div className='flex'>
                {
                    Array.from({ length: user.active_dots_balance }, (_, index) => (
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