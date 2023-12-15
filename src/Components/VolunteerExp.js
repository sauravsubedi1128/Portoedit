import { CiEdit } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { clickvolunexpBtn } from "../Redux/Actions";
function Volunteerexp() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.volunexpBtn);

  const handleClick = () => {
    dispatch(clickvolunexpBtn(!value));
  };
  return (
    <div className="mb-9">
      <div>
        <h1 className="bg-slate-700 h-[40px] w-[100%] p-3 font-bold text-white uppercase">
          Volunteer Experience
        </h1>
        <CiEdit onClick={handleClick} />
      </div>
      <div className="ml-4 mt-4">
        <div className="flex justify-between">
          <h2>President</h2>
          <h2> 2076-2077</h2>
        </div>
        <h2 className="font-bold">Leo Club of Lekhnath Sahaara</h2>
        <div>
          <ol className="list-disc list-inside">
            <li>
              Led cleanliness campaigns, hunger relief programs, and
              fundraisers.
            </li>
            <li>Organized community awareness campaigns on various issues.</li>
            <li>
              Fostered collaboration with local organizations and leaders.
            </li>
            <li>
              Facilitated team-building and skill development for club members.
            </li>
            <li>
              Received recognition from Lions Club International for outstanding
              contributions.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
export default Volunteerexp;
