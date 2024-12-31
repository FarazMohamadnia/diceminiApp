import BackButton from "../../components/common/shared/BackButton";
import Notificationcard from "./components/NotificationCard/notificationcardComponent";

const fakeData =[
    {
        title : 'New Dice',
        text : 'You can Buy a new Dice Right now'
    },
    {
        title : 'New Game',
        text : 'You can Buy a new Dice Right now'
    },
    {
        title : 'Create Game',
        text : 'You can Buy a new Dice Right now'
    },
    {
        title : 'Play for gift',
        text : 'You can Buy a new Dice Right now'
    },
    {
        title : 'New challenge',
        text : 'You can Buy a new Dice Right now'
    }
]
export default function Notification(){
    return(
        <div className="px-4">
            <div>
                <BackButton title={'Back'}/>
            </div>
            <div>
                <p className="text-[#1ae5a1] text-center text-[20px] font-bold">Notifications</p>
                <div>
                    {
                        fakeData.map(data =>  <Notificationcard key={data.title} {...data}/>)
                    }

                </div>
            </div>
        </div>
    )
}