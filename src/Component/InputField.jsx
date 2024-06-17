// InputField.js
import React, { useState } from "react";
import Preview from "./Preview.jsx";
import Toggle from "./Toggle.jsx";

const InputField = ({ label, value, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const [selected,setselected] = useState('Part Time')

  const [Title, setTitle] = useState("");
  const [intro, setintro] = useState("");
  const [role, setrole] = useState("");
  const [Experience, setexperince] = useState("");
  const [Qualifations, setQualification] = useState("");
  const [Salary, setSalary] = useState("");
  const [Conclusion, setConclusion] = useState("");
  const [Company, setCompany] = useState("");
  const [Location, setLocation] = useState("");



  return (
    <div className="flex w-[90vw] justify-evenly">
      <div className="flex w-fit">

        <div>
       <h1 className=' text-3xl p-3 pt-1 '>Job Post Manager for websites</h1>
        <div className={`border border-slate-600 p-4 rounded `}>
          <div className="flex justify-between" id="title">
            <div className="">
              <input
                type="checkbox"
                checked={isChecked}
                onClick={() => {
                  setIsChecked(!isChecked);
                }}
              />
              <input
                className="outline outline-2 ml-2 p-1"
                type="text"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                placeholder="Job Post Title"
              />
            </div>
            <div>
              <Toggle />
            </div>
          </div>

          {/* Introduction */}
          <div className="">
            <div className="flex">
              <input
                type="checkbox"
                checked={isChecked}
                onClick={() => {
                  setIsChecked(!isChecked);
                }}
              />
              <h3 className="underline p-4">Introduction</h3>
            </div>
            <textarea
              className="p-2 outline outline-1 w-full h-[7vh]"
              type="text"
              onChange={
                isChecked
                  ? ""
                  : (e) => {
                      setintro(e.target.value);
                    }
              }
              placeholder="The ideal candidate is someone.."
            />
          </div>

          {/* Role */}
          <div className="">
            <div className="flex">
              <input
                type="checkbox"
                checked={isChecked}
                onClick={() => {
                  setIsChecked(!isChecked);
                }}
              />
              <h3 className="underline p-4 ">Roles & Responsibilities</h3>
            </div>
            <textarea
              className="p-2 outline outline-1 w-full h-[9vh]"
              type="text"
              onChange={(e) => {
                isChecked ? "" : setrole(e.target.value);
              }}
              placeholder="Your Jobs role will include..."
            />
          </div>

          {/* Exprerince */}
          <div>
            <div className="flex justify-between  pt-2">
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onClick={() => {
                    setIsChecked(!isChecked);
                  }}
                  onChange={(e) => {
                    isChecked ? "" : setexperince(e.target.value);
                  }}
                />
                <h3 className="underline">Experience Range(yrs) </h3>
              </div>
              <div className="flex border-2 rounded-sm">
                <label>Min</label>
                <select name="min" id="min">
                  <option value="volvo">1</option>
                  <option value="saab">2</option>
                </select>
              </div>

              <div className="flex border-2 rounded-sm">
                <label>Max</label>
                <select name="max" id="max">
                  <option value="volvo">1</option>
                  <option value="saab">2</option>
                </select>
              </div>
            </div>
          </div>

          {/* Qualification */}

          <div className="mt-2">
            <div className="flex gap-2 ">
              <input type="checkbox" checked={isChecked} />

              <input
                className="p-2 outline outline-1 w-full "
                type="text"
                onChange={(e) => {
                  isChecked ? "" : setQualification(e.target.value);
                }}
                placeholder="Qualification"
              />
            </div>
          </div>
          {/* Salary Range */}
          <div className="mt-4">
            <div className="flex gap-2">
              <input
                type="checkbox"
                checked={isChecked}
                onClick={() => {
                  setIsChecked(!isChecked);
                }}
              />

              <input
                className="outline outline-1 p-2"
                type="text"
                placeholder="Salary Range "
                onChange={(e) => {
                  isChecked ? "" : setSalary(e.target.value);
                }}
              />
            </div>
          </div>

          {/* Conclusion */}
          <div className="mt-4">
            <div className="flex gap-2">
              <input
                type="checkbox"
                checked={isChecked}
                onClick={() => {
                  setIsChecked(!isChecked);
                }}
              />

              <textarea
                className="p-2 outline outline-1 w-full h-[15vh] "
                type="text"
                placeholder="Call to Action concluding"
                onChange={(e) => {
                  isChecked ? "" : setConclusion(e.target.value);
                }}
              />
            </div>
          </div>

          {/* Company */}
          <div className="mt-4">
            <div className="flex gap-2">
              <input
                type="checkbox"
                onClick={() => {
                  setIsChecked(!isChecked);
                }}
              />
              <input
                className="outline outline-2"
                type="text"
                onChange={(e) => {
                  isChecked ? "" : setCompany(e.target.value);
                }}
                placeholder="Company"
              />
            </div>
          </div>

          {/* Job Location */}
          <div className="mt-4">
            <div className="flex gap-2">
              <input
                type="checkbox"
                onClick={() => {
                  setIsChecked(!isChecked);
                }}
              />
              <input
                className="outline outline-2"
                type="text"
                onChange={(e) => {
                  isChecked ? "" : setLocation(e.target.value);
                }}
                placeholder="Job Location"
              />
            </div>
          </div>
          {/* Full time */}

          <div className="flex justify-between mt-4 ">
            <div className="flex gap-2">
              <input type="checkbox" />
              <div className="border-2 p-1 gap-2">
                <label>Full Time</label>
                <select onChange={(e)=>{setselected(e.target.value)}} className="bg-slate-500" name="min" id="min">
                  <option value="Part Time">Part Time</option>
                  <option value="Contract">Contract</option>
                  <option value="Intership">Internship</option>
                </select>
              </div>
            </div>

            <div className="flex gap-2">
              <input type="checkbox" />
              <div className="border-2 p-1 gap-2">
                <label className="ml-1">Labels</label>
                <select className="bg-slate-500 ml-2" name="min" id="min">
                  <option value="p">Remote</option>
                  <option value="c">5 days week</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* delete and dublicate */}
        {/* <div className="mt-16 ml-[0px] border-2 border-l-0 border-slate-600 h-fit p-2  ">
          <button className="mr-2 text-sm  text-red-500 hover:text-red-700 pt-2 pb-2 font-bold" >
            Delete
          </button>
          <button className="text-sm text-blue-500 hover:text-blue-700  font-bold">
          Duplicate
          </button>
        </div> */}
        </div>
      {/* Preview Page */}
      <div className="w-1/2 ">
        <Preview
          Title={Title}
          intro={intro}
          role={role}
          Experience={Experience}
          Qualifations={Qualifations}
          Salary={Salary}
          Conclusion={Conclusion}
          Company={Company}
          Location={Location}
          selected = {selected}
        />
      </div>
    </div>
  );
};

export default InputField;
