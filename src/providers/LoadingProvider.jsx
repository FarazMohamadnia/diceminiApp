// ApiLoader.js
import { useEffect } from 'react';
import useLoadingStore from '../store/loading';
import { Api } from '../api/apiUrl';
import axios from 'axios';
import useUserStore from '../store/user';
import useTokenStore from '../store/token';


const ApiLoader = () => {
  const { setLoading } = useLoadingStore();
  const { user, setUser } = useUserStore();
  const {token ,settoken } = useTokenStore();
  const loadAllAPIs = async () => {
    if(!user.address){
      setLoading(true)
    }else{
      setLoading(false)
    }
    try {
        // telegram Auth
        const tg =window.Telegram.WebApp.initDataUnsafe.user;
        const response1  = await axios.post(Api[2].PostAuth , {
            telegram_data : tg
            // For test 
            // telegram_data : {
            //     id : 2,
            //     first_name : 'mmd',
            //     last_name : 'javadiani',
            //     username : 'lalalalalal'
            // }
        });
        settoken(response1.data.player_id);
        // USER API !
        try{
        const response  = await axios.get(Api[0].HomePage , {
           headers:{
              "Authorization" : `token ${token}`
           }
         } );
         const {active_dots_balance , dice_balance , inactive_dots_balance ,level,
           max_xp,telegram_id,telegram_username ,xp , picture , ton_balance
           }=response.data.player;
         setUser({
           ...user,
           active_dots_balance : active_dots_balance,
           dice_balance : dice_balance,
           inactive_dots_balance:inactive_dots_balance,
           level:level,
           max_xp : max_xp,
           telegram_id : telegram_id,
           telegram_username:telegram_username,
           xp:xp,
           picture : picture,
           ton_balance : ton_balance
         }) 
        }catch(err){
            console.log(err)
        }
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    } catch (error) {
        console.error('Error loading APIs:', error);   
    }
  };

  useEffect(() => {
    loadAllAPIs();
  }, [token]);

  return null;
};

export default ApiLoader;
