import React from "react";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Language from "./Components/Language";
import Careerobj from "./Components/Careerobj";
import Edu from "./Components/Edu";
import Workexp from "./Components/WorkExp";
import Volunteerexp from "./Components/VolunteerExp";
import Keyquali from "./Components/KeyQuali";
import Header from "./Components/header";
import Initblock from "./Leftcol/Initblock";

const App = () => {
  return (
    <div className="w-[95%] ml-auto mr-auto">
      <div className="flex gap-2">
        <div className="flex-2 w-[15%]">
          <Initblock />
        </div>

        <div className="flex-1 w-[85%]">
          <Header />

          <div className="flex md:gap-1">
            <div className="bg-slate-700  h-auto mb-2 pl-6 w-[30%] ">
              <Contact/>
              <Skills/>
              <Language/>
            </div>

            <div className="bg-white-400 w-[70%]">
              <Careerobj />
              <Edu />
              <Workexp />
              <Volunteerexp />
              <Keyquali />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
