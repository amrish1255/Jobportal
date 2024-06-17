import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputField from './InputField';
const CreateJob = () => {
  
      const [count,setcount] = useState(0)
        const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleCreateJob = () => {
    const newJob = {
      id: uuidv4(),
      title: 'New Job',
      description: 'Job Description',
    };
    setcount(count+1);
    setJobs([...jobs, newJob]);
  };

  const handleDeleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
    setcount(count-1)
    if (selectedJob && selectedJob.id === id) {
      setSelectedJob(null);
    }
  };

  const handleDuplicateJob = (id) => {
    const jobToDuplicate = jobs.find(job => job.id === id);
    setcount(count+1)
    const duplicatedJob = { ...jobToDuplicate, id: uuidv4() };
    setJobs([...jobs, duplicatedJob]);
  };

 

  return (
    <div className="flex flex-col">
      <div className=" p-4">
        
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 rounded" onClick={handleCreateJob}>Create Job {count==0?"":count}</button>
        <ul>
          {jobs.map(job => (
            <li key={job.id} className="flex">
              <div>
              <InputField job={job} handleDeleteJob={handleDeleteJob}/>
              </div>
             
              <div className="mt-16 ml-[10px]  ">
                <button className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md mb-4" onClick={() => handleDeleteJob(job.id)}>Delete</button>
                <button className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md" onClick={() => handleDuplicateJob(job.id)}>Duplicate</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CreateJob