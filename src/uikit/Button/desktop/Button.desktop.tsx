import "./Button.desktop.css";
import {useEffect} from "react";

alert("DESKTOP");

const AppButton = () => {

  useEffect(() => {
    alert("DESKTOP");
  }, []);

  return (
    <div className={"button-desk"}>
      Кнопка для десктопа
    </div>
  )
}

export default AppButton;