import { CiEdit } from "react-icons/ci";
import { clickcareerobjBtn } from "../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";

function Careerobj() {
  const { careerobj } = useSelector((state) => state);
  const dispatch = useDispatch();
  const value = useSelector((state) => state.careerobjBtn);

  const handleClick = () => {
    dispatch(clickcareerobjBtn(!value));
  };

  return (
    <div className="mb-3">
      <div>
        <h1 className="bg-slate-700 h-[40px] w-[100%] p-3 font-bold text-white uppercase">
          Career Objective
        </h1>
        <CiEdit onClick={handleClick} />
      </div>
      <div className="ml-4 mt-4">
        <p className="m-2">{careerobj}</p>
      </div>
    </div>
  );
}
export default Careerobj;
