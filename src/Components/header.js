import { CiEdit } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {  clickNameBtn } from "../Redux/Actions";

function Header() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.nameBtn);

  const handleClick = () => {
    dispatch(clickNameBtn(!value));
  };

  return (
    <div>
      <h1 className="bg-slate-400 text-white tracking-widest font-bold text-center text-5xl p-10 mt-4 mb-4 ">
    
        Saurav Subedi <CiEdit onClick={handleClick} className="ml-auto" />
      </h1>
    </div>
  );
}
export default Header;
