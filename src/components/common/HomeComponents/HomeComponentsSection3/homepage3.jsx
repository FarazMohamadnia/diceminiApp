import './homepage3.css'
import fireImage from '../../../../asset/img/HomeImg/HomePageSection3Image/FireLogo.png'
import BtnIcon from '../../../../asset/img/HomeImg/HomePageSection3Image/Button.png'
import { useEffect, useState } from 'react'
const Data = [
    {
        id : 0,
        Title : 'Dice Game',
        Text : 'UP TO 1000x',
        img : 'https://s3-alpha-sig.figma.com/img/fdfc/e065/6664e1984fa12c0d649d676226e35b36?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Of8VlSFTB5~dbB9RqY3a8LDIB1UtF-0f0HsQ9dfb3jBZqbb~U8r1g5QrK5-Hl3TkYkYuMYmnXAEQ21GcoC0diCm6~tLiOAQuAeyqwHV2pDAKcpCPhKRibNxiDdf773~9Yj~JPbTGyJKoVZjb9JFxGSGwhHk5Px6AzX~9L6v~7NsYQHIIAxt7HtTd1-TK7dxIuKHME-M~a8YIxFj0lQPsBljPssSShrZzb4RJhmhhXpKTzlm9m5L8WXkDYrrbfjXGxFjBBCMPVyajmN9OI9mMY3qgiLvbUOrAgS-wQv6odb~d7xYBpiaYVogKQgqJOk7PkYMNQihn1KEIkr1eMDIH4A__'
    },
    {
        id : 1,
        Title : 'Dice Game',
        Text : 'UP TO 1000x',
        img : 'https://s3-alpha-sig.figma.com/img/fdfc/e065/6664e1984fa12c0d649d676226e35b36?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Of8VlSFTB5~dbB9RqY3a8LDIB1UtF-0f0HsQ9dfb3jBZqbb~U8r1g5QrK5-Hl3TkYkYuMYmnXAEQ21GcoC0diCm6~tLiOAQuAeyqwHV2pDAKcpCPhKRibNxiDdf773~9Yj~JPbTGyJKoVZjb9JFxGSGwhHk5Px6AzX~9L6v~7NsYQHIIAxt7HtTd1-TK7dxIuKHME-M~a8YIxFj0lQPsBljPssSShrZzb4RJhmhhXpKTzlm9m5L8WXkDYrrbfjXGxFjBBCMPVyajmN9OI9mMY3qgiLvbUOrAgS-wQv6odb~d7xYBpiaYVogKQgqJOk7PkYMNQihn1KEIkr1eMDIH4A__'
    },
    {
        id : 2,
        Title : 'Dice Game',
        Text : 'UP TO 1000x',
        img : 'https://s3-alpha-sig.figma.com/img/fdfc/e065/6664e1984fa12c0d649d676226e35b36?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Of8VlSFTB5~dbB9RqY3a8LDIB1UtF-0f0HsQ9dfb3jBZqbb~U8r1g5QrK5-Hl3TkYkYuMYmnXAEQ21GcoC0diCm6~tLiOAQuAeyqwHV2pDAKcpCPhKRibNxiDdf773~9Yj~JPbTGyJKoVZjb9JFxGSGwhHk5Px6AzX~9L6v~7NsYQHIIAxt7HtTd1-TK7dxIuKHME-M~a8YIxFj0lQPsBljPssSShrZzb4RJhmhhXpKTzlm9m5L8WXkDYrrbfjXGxFjBBCMPVyajmN9OI9mMY3qgiLvbUOrAgS-wQv6odb~d7xYBpiaYVogKQgqJOk7PkYMNQihn1KEIkr1eMDIH4A__'
    }
]
export default function HomePage3(){
    const [Selected , setSelected]=useState(0)
    const CardHandler = (e)=>{
        const Id = e.target.id;
        setSelected(Id);
        console.log(Selected)
    }

    return(
        <div className='mb-5'>
            <div className="mt-4 HomepageSection2-backgroundColor w-full shadow h-[42px] px-4 flex items-center mb-4">
                <img className='w-[24] h-[28] mb-1' src={fireImage} alt=""/> 
                <p className='text-[#1ae5a1] text-base font-bold ml-2'>Trending</p>
            </div>
            <div className='HomePage3-card-container'>
                <div className='HomePage3-body-card-component'>
                    {
                        Data.map(Data =>(
                            <div key={Data.id}  style={{backgroundImage: `url(${Data.img})`}} className={Selected == Data.id ? 'HomePage3-card-component HomePage3-card-Selected' : 'HomePage3-card-component HomePage3-card-NotSelected' }>
                                <div onClick={CardHandler} id={Data.id} className='HomePage3-linearGradient'></div>
                                <div className={Selected != Data.id ? 'hidden' : 'flex flex-col relative z-10 mb-10 items-center' }>
                                    <p className='text-[#fff6f5] text-xl font-bold'>{Data.Title}</p>
                                    <p className='text-[#fff6f5] text-[13px] font-medium mt-2'>{Data.Text}</p>
                                    <img className='w-16 h-16 mt-2' src={BtnIcon} alt=''/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}