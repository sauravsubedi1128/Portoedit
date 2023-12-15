import React from "react";
import { useState } from "react";
import Inputapp from "../InputField/Inputapp";
import { useDispatch, useSelector } from "react-redux";
import { clickBtn } from "../Redux/Actions";
import HeaderInput from "../InputField/Headerinput";
import EduInput from "../InputField/Eduinput";
import CareerObjInput from "../InputField/Careerobjinput";
import KeyQualiInput from "../InputField/KeyQualiinput";
import VolunteerExpInput from "../InputField/VolunteerExpInput";
import WorkExpInput from "../InputField/WorkExpinput";
import LanguageInput from "../InputField/Languageinput";
import ContactInput from "../InputField/Contactinput";
import SkillsInput from "../InputField/Skilssinput";

const Initblock = () => {
  const dispatch = useDispatch();
  const [isShown, setIsShown] = useState(false);
  const value = useSelector((state) => state.btn);
  const nameValue = useSelector((state) => state.nameBtn);
  const eduValue = useSelector((state) => state.eduBtn);
  const careerobjValue = useSelector((state) => state.careerobjBtn);
  const contactValue = useSelector((state) => state.contactBtn);
  const skillsValue = useSelector((state) => state.skillsBtn);
  const languageValue = useSelector((state) => state.languageBtn);
  const workexpValue = useSelector((state) => state.workexpBtn);
  const volunexpValue = useSelector((state) => state.volunexpBtn);
  const keyqualValue = useSelector((state) => state.keyqualBtn);

  const handleClick = (event) => {
    dispatch(clickBtn(!value));
  };

  return (
    <div className="">
      <div >
        <button onClick={handleClick} className="border-2 ">
          Click
        </button>

        {/* <div className={`${value ? "block" : "hidden"}`}>
          <Inputapp />
        </div> */}

        <div className={`${nameValue ? "block" : "hidden"}`}>
          <HeaderInput />
        </div>
        <div className={`${careerobjValue ? "block" : "hidden"}`}>
          <CareerObjInput />
        </div>
        <div className={`${eduValue ? "block" : "hidden"}`}>
          <EduInput />
        </div>

        

        <div className={`${contactValue ? "block" : "hidden"}`}>
          <ContactInput />
        </div>
        <div className={`${skillsValue ? "block" : "hidden"}`}>
          <SkillsInput />
        </div>
        <div className={`${languageValue ? "block" : "hidden"}`}>
          <LanguageInput />
        </div>
        <div className={`${workexpValue ? "block" : "hidden"}`}>
          <WorkExpInput />
        </div>
        <div className={`${volunexpValue ? "block" : "hidden"}`}>
          <VolunteerExpInput />
        </div>
        <div className={`${keyqualValue ? "block" : "hidden"}`}>
          <KeyQualiInput />
        </div>
      </div>
    </div>
  );
};

export default Initblock;
