import { CiEdit } from "react-icons/ci";

function Edu() {
  return (
    <div className="mb-9">
      <div>
        <h1 className="bg-slate-700 h-[40px] w-[100%] p-3 font-bold text-white uppercase">
          Education
        </h1>
        <CiEdit />

      </div>
      <div className="ml-4 mt-4">
        <div className="m-2">
          <div className="flex justify-between">
            <h2 className="font-bold">Bachelor of Computer Application </h2>
            <h2 className="font-bold"> 2079-running</h2>
          </div>

          <p>Advanced College of Engineering and Management</p>
          <br />
          <div className="flex justify-between">
            <h2 className="font-bold">+2 | NEB </h2>
            <h2 className="font-bold"> 2077-2079</h2>
          </div>
          <div className="flex justify-between">
            <p>Diamond Secondary School</p> <p>3.30 GPA</p>
          </div>
          <br />
          <div className="flex justify-between">
            <h2 className="font-bold">SEE</h2>
            <h2 className="font-bold">2076</h2>
          </div>
          <div className="flex justify-between">
            <p>Diamond Secondary School </p>
            <p>4 GPA</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Edu;
