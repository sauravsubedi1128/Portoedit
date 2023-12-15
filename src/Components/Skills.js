import { CiEdit } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { clickskillsBtn } from "../Redux/Actions";
function Skills() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.skillsBtn);

  const handleClick = () => {
    dispatch(clickskillsBtn(!value));
  };
  return (
    <div className="text-white mt-60 px-2">
      <h1 className="font-bold">Skills</h1>
      <CiEdit onClick={handleClick} />

      <p className="bg-white h-[2px] w-[95%]"></p>
      <div className="flex flex-row justify-between py-3 ">
        <div>
          <ul className="text-sm leading-6">
            <li>HTML</li>
            <li>CSS</li>
            <li>Digital Marketing</li>
            <li>Copywriting</li>
            <li>Photography</li>
            <li>Video Editing</li>
            <li>Blogging</li>
          </ul>
        </div>
        <div>
          <ul className="text-sm leading-6">
            <li>Javascript</li>
            <li>SEO</li>
            <li>MS Excel</li>
            <li>MS Powerpoint</li>
            <li>Adobe Photoshop</li>
            <li>Creativity</li>
            <li>Teamwork</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Skills;
