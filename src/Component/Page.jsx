// App.js
import { useState } from 'react';
import CreateJob from './CreateJob.jsx';
function Page() {
  const [firstName, setFirstName] = useState('');

  // Add more state variables as needed

  return (
    // <div className="flex">
    //   <div className=" p-4">
    //     <InputField label="First Name" value={firstName}  onChange={(e) => setFirstName(e.target.value)} />
       
    //   </div>
    // </div>
    <div className=''>
       <CreateJob />
    </div>
  );
}

export default Page;
