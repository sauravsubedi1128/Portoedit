import { CiEdit } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { clicklanguageBtn } from "../Redux/Actions";
function Language() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.languageBtn);

  const handleClick = () => {
    dispatch(clicklanguageBtn(!value));
  };
  return (
    <div className="text-white mt-80 px-2">
      <h1 className="font-bold ">Language</h1>
      <CiEdit onClick={handleClick} />

      <p className="bg-white h-[2px] w-[95%] "></p>
      <div className="py-2">
        <ul>
          <li>English</li>
          <li>Nepali</li>
        </ul>
      </div>
    </div>
  );
}
export default Language;
