import { CiEdit } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { clickkeyqualBtn } from "../Redux/Actions";

function Keyquali() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.keyqualBtn);

  const handleClick = () => {
    dispatch(clickkeyqualBtn(!value));
  };
  return (
    <div className="mb-1">
      <div>
        <h1 className="bg-slate-700  h-[40px] w-[100%] p-3 font-bold text-white uppercase">
          {" "}
          Key Qualification
        </h1>
        <CiEdit onClick={handleClick} />
      </div>
      <div className="ml-4 mt-4">
        <ol className="list-disc list-inside">
          <li>Strong numerical and communication skills.</li>
          <li>Proactive and solution-oriented mindset. </li>
          <li>Analytical, innovative, self-driven, and confident. </li>
          <li>Effective team player and leader.</li>
          <li>
            Thrives on challenges, particularly in implementing and developing
            new initiatives.{" "}
          </li>
        </ol>
      </div>
    </div>
  );
}
export default Keyquali;
