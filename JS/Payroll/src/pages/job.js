import '../App.css';
import{ useState } from "react";
import Axios from 'axios'
function Job() {

  const[jobID, setJobID] = useState("");
  const[departmentID, setDepartmentID] = useState("");
  const[jobTitle, setJobTitle] = useState("");
  const[hourlyWage, setHourlyWage] = useState([0]);

  const[newDepartmentID, setNewDepartmentID] = useState("");
  const[newJobTitle, setNewJobTitle] = useState("");
  const[newHourlyWage, setNewHourlyWage] = useState([0]);


  const[jobList, setJobList] = useState([]);
   
  const addJob = () => {
    Axios.post("http://localhost:3001/job", { 
        Job_ID: jobID,
        Department_ID: departmentID, 
        Job_Title: jobTitle, 
        Hourly_Wage:hourlyWage
           //client: server
          }).then(() => {
          //console.log("SUCCESS!");
            //use radius structuring
         setJobList([...jobList, {
          Job_ID: jobID,
          Department_ID: departmentID, 
          Job_Title: jobTitle, 
          Hourly_Wage:hourlyWage
           }]);

           })                                                           
     };
 
  const getJob = () => {
    //console.log(timesheetID); //test whether it grabs the name from mysql server
    Axios.get("http://localhost:3001/job").then((response) => {
      console.log(response);
      setJobList(response.data);
      });                                                           
  };

  const UpdateJob = (Job_ID) => {
    Axios.put("http://localhost:3001/UpdateJob", {
      Department_ID: newDepartmentID, 
      Job_Title: newJobTitle, 
      Hourly_Wage:newHourlyWage,
        Job_ID: Job_ID}).then(

     (response) => {
        setJobList(
          jobList.map((val) => {
            return val.Job_ID == Job_ID
              ? {
                Job_ID: val.Job_ID,
                Department_ID: newDepartmentID, 
                Job_Title: newJobTitle, 
                Hourly_Wage:newHourlyWage
                }
              : val;
          })
        );
      }
    );
  };

  const deleteJob = (Job_ID) => {
    Axios.delete(`http://localhost:3001/DeleteJob/${Job_ID}`).then((response) => {
      setJobList(
        jobList.filter((val) => {
          return val.Job_ID != Job_ID;
        })
      );
    });
  };
  

  //const displayInfo = () =>{console.log(timesheetID+employeeID+clockDate+clockIn+clockOut)}

  return (
    <div className="App">

        <nav class="crumbs">
            <ol>
                <li class="crumb"><a href="/">HomePage </a></li>
                <li class="crumb">Manage Jobs</li>
            </ol>
        </nav>

      <div className="information">
        <lable>Job ID </lable>
        <input type="text" onChange={(event) => {setJobID(event.target.value)}}/>
        <lable>Job Title </lable>
        <input type="text" onChange={(event) => {setJobTitle(event.target.value)}}/>
        <lable>Department</lable>
        <input type="text" onChange={(event) => {setDepartmentID(event.target.value)}}/>
        <lable>Hourly Wage</lable>
        <input type="number" onChange={(event) => {setHourlyWage(event.target.value)}}/>
        <button onClick={addJob}>Add a record</button>
        <div>-----------------------------------------------------------------------------------------------------------------------------------------------------</div>
        <button onClick={getJob}>Display all records </button>
        {jobList.map((val,key)=>{ return(
          <div className="timesheet">
            <div> 
              <h3>Job ID: {val.Job_ID}</h3>
              <h3>Job Title: {val.Job_Title}</h3>
              <h3>Department: {val.Department_ID}</h3>
              <h3>Hourly Wage: {val.Hourly_Wage}</h3>
             

            <div align="center"><button onClick={() => {deleteJob(val.Job_ID); }} > Delete </button></div>

            </div>
            <div className="updateBox"> <h2 align="center">Edit this record  </h2>   
                      <div><lable>Job_Title </lable>
                      <input type="text" onChange={(event) => {setNewJobTitle(event.target.value)}}/></div>
                      <div><lable> Department ID </lable>
                      <input type="text" placeholder="Enter an existing Department ID" onChange={(event) => {setNewDepartmentID(event.target.value)}}/></div>
                      <div><lable>Hourly Wage </lable>
                      <input type="number" onChange={(event) => {setNewHourlyWage(event.target.value)}}/></div>
                      <div align="center"><button className="updateB" onClick={()=>{UpdateJob(val.Job_ID);}}> {" "} Update </button></div>
            </div>   
          </div>

         )
      })}
      <div>---------------------------------------------------------------------------------------------------------------------------------------------</div>
    </div>
  </div>
);
}

export default Job;