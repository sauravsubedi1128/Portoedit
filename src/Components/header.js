import { CiEdit } from "react-icons/ci";
import { useSelector } from "react-redux";

function Header(){
  const { header } = useSelector(
    (state) => state);
  return(
    <div>
      <h1 className="bg-slate-400 text-white tracking-widest font-bold text-center text-5xl p-10 mt-4 mb-4 "> {header}  <CiEdit className="ml-auto" /></h1>
     

    </div>
  )
}
export default Header