import "./Button.mobile.css";
import {useEffect} from "react";

alert("MOBILE");

const AppButton = () => {

  useEffect(() => {
    alert("MOBILE");
  }, []);

  return (
      <div className={"button-mob"}>
        Кнопка для мобилы
      </div>
  )
}

export default AppButton;