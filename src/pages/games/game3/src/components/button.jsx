import { useTonWallet } from "@tonconnect/ui-react";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { useStore } from "../store";
import useTokenStore from "../../../../../store/token";
import { Api } from "../../../../../api/apiUrl";

export default function Button({
  text,
  icon,
  className,
  values,
  controller,
  setcontroller,
}) {
  const {token}=useTokenStore()
  const [loading, setloadin] = useState(false);
  const { player_id, activePredict, updatePredicts, predictList } = useStore();

  const PostDicehandler = async () => {
    if (controller === "disable") {

    } else if (controller === "submit" || controller === "change") {
      try {
        setloadin(true);
        const response = await axios.post(
          Api[6].predict,
          {
            dice_number1: values.number1,
            dice_number2: values.number2,
          },
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );
        Swal.fire({
          icon:'success',
          title : 'successfully send'
        })
        console.log(response)
        const list = JSON.parse(JSON.stringify(predictList));

        updatePredicts({
          activePredict: {
            dice_number1: values.number1,
            dice_number2: values.number2,
          },
        });
        setloadin(false);
      } catch (err) {
      
        setloadin(false);
        Swal.fire({
          icon:'error',
          title : err.response.data.error
        })
      }
    }
  };

  return (
    <button
      disabled={loading}
      className={`${className} w-[130px] py-[6px] bg-black/10 rounded-[85px] border flex justify-evenly gap-2 items-center px-3 `}
      onClick={PostDicehandler}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </button>
  );
}
