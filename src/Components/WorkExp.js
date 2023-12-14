import { CiEdit } from "react-icons/ci";

function Workexp() {
  return (
    <div className="mb-9">
    <div>
      <h1 className="bg-slate-700 h-[40px] w-[100%] p-3 font-bold text-white uppercase">Work Experience</h1>
      <CiEdit />

      </div>

      <div className="ml-4 mt-4">
      <div className="flex justify-between" >
      <p >Digital Marketer</p>
      <p>2079-2080</p>
      </div>
      <h2 className="font-bold">Mailmeets</h2>
      <ol className="list-disc list-inside w">
        <li>
          Designed and coded responsive email templates, ensuring a consistent
          and appealing brand image across all campaigns.
        </li>
        <li>
          Conducted A/B testing of subject lines, content, and visuals to
          optimize email performance and drive higher engagement.
        </li>
        <li>
          Implemented marketing automation workflows to nurture leads and drive
          customer retention.
        </li>
      </ol>
<br />
<div className="flex justify-between">
      <h2>Blogger</h2><h2> 2076-2079</h2></div>
      <h2 className="font-bold">Self-Employed</h2>
      <ol className="list-disc list-inside">
        <li>
        Consistently produced high-quality and SEO-optimized content, resulting in organic traffic.
        </li>
        <li>
        Implemented monetization strategies, including affiliate marketing and ad placements, to generate income from the blog.

        </li>
        <li>
        Stayed updated on industry trends and attended relevant conferences and webinars to enhance blogging skills and knowledge.

        </li>
      </ol>
      </div >

    </div>
  );
}
export default Workexp;
