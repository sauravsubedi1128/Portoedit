import React from "react";
import { useState } from "react";
import Inputapp from "../InputField/Inputapp";
import { useDispatch, useSelector } from "react-redux";
import { clickBtn } from "../Redux/Actions";

const Initblock = () => {
  const dispatch = useDispatch()
  const [isShown, setIsShown] = useState(false);
  const value = useSelector(state => state.btn);



  const handleClick = (event) => {
    dispatch(clickBtn(!value))
  };

  return (
    <div className="flex justify-between h-screen">
      <div>
        <button onClick={handleClick} className="border-2 ">
          
          Click
        </button>

        {value ? <Inputapp /> : null}
      </div>
    </div>
  );
};

export default Initblock;
