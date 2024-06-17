// Preview.js


const Preview = ({Title,intro,role,Experience, Qualifations,Salary,Conclusion,Company,Location,selected}) => {
  return (

    <div className="flex flex-col">
     <div className="flex flex-col">
      <span className="text-xl self-end mb-3">Tech Task from <span className="text-orange-500 font-semibold">Handy</span><span className="font-bold">Solver</span></span>
      <h3 className="text-sm self-end mb-4">  All right reserved</h3>
      </div>
    <div className="border border-slate-600 p-4 rounded">

<div className="flex justify-between">
  <div>
  <h1 className="font-bold">{Title}</h1>
  </div>
   
   <div className="flex gap-2">
   <div className="border-2  p-4 rounded-[50%] bg-blue-400">
   <h3>Remote</h3>
   </div>
   <div className="border-2  p-3 rounded-[50%] bg-blue-400">
    <h3>5 days week</h3>
    </div>
   </div>
 
    </div>

    {/* Introduction */}
    <div className="mt-3 mb-3">
      <h3 className="font-semibold">Introduction : </h3> 
      <h3>{intro}</h3>
    </div>

    {/* Role */}
    <div className="mt-3 mb-3">
    <h3 className="font-semibold">Roles and Reponsibilities: {role}</h3>
    </div>

    {/* Qualification */}
    <div className="mt-3 mb-3">
    <h4 className="font-semibold">Preferred Experience 0 to 4 yrs</h4>
    <h3 className="font-semibold">Qualifations: 
    <span className="font-normal"> { Qualifations}</span>
    </h3>
    </div>
    {/* Conclusion */}
    <div className="mt-3 mb-3">
    <h3 className="font-semibold">Concluding Statement:
      <br />
    </h3>
      {Conclusion}
    </div>
    {/* Company */}
    <div className="mt-3 mb-3">
    <h3 className="font-semibold">Company:  
    </h3>
    {Company}
   

    </div>

    {/* Location */}
    <div className="mt-3 mb-3">
    <h3 className="font-semibold">Location:</h3>  {Location}
   
    </div>
    {/* Job Tyte */}
    <div className="mt-3 mb-3">
    <h3 className="font-semibold">
    </h3 ><span className="font-semibold">Job Type: </span>{selected}
    </div>
    </div>
   
    </div>
  );
};

export default Preview;
