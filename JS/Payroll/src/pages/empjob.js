//import logo from './logo.svg';
import "../App.css";
import{useState} from "react";
import Axios from 'axios';
import React from 'react';

function EmpJob() {
    const[jobID, setJobID] = useState("");
    const[employeeID, setEmployeeID] = useState("");
    const[supervisorID, setSupervisorID] = useState("");
    const[startDate, setStartDate] = useState("");
    const[endDate, setEndDate] = useState("");

    const[newSupervisorID, setsetNewSupervisorID] = useState("");
    const[newStartDate, setsetNewStartDate] = useState("");
    const[newEndDate, setsetNewEndDate] = useState("");

  const [empjobList, setEmpjobList] = useState([]);

  const addEmpjob = () => {
    //console.log(Time_Sheet_ID); //test whether it grabs the ID from mysql server
    Axios.post("http://localhost:3001/empjob", { 
        Job_ID:jobID,
        Employee_ID: employeeID,
        Supervisor_ID: supervisorID,
        Start_Date:startDate,
        End_Date: endDate
           //client: server
          }).then(() => {
          //console.log("SUCCESS!");
            //use radius structuring
         setEmpjobList([...empjobList, {
            Job_ID:jobID,
            Employee_ID: employeeID,
            Supervisor_ID: supervisorID,
            Start_Date: startDate,
            End_Date: endDate
           }]);

           })                                                           
     };
 
  const getEmpjob = () => {
    //console.log(timesheetID); //test whether it grabs the name from mysql server
    Axios.get("http://localhost:3001/empjob").then((response) => {
      console.log(response);
      setEmpjobList(response.data);
      });                                                           
  };

  const UpdateEmpjob = (Job_ID, Employee_ID) => {
    Axios.put("http://localhost:3001/UpdateEmpjob", {
        Supervisor_ID: newSupervisorID,
        Start_Date: newStartDate,
        End_Date: newEndDate,
        Employee_ID: Employee_ID,
        Job_ID: Job_ID }).then(

     (response) => {
        setEmpjobList(
          empjobList.map((val) => {
            return ((val.Employee_ID == Employee_ID) && (val.Job_ID == Job_ID))
              ? {
                Job_ID: val.Job_ID,
                Employee_ID: val.Employee_ID,
                Supervisor_ID: newSupervisorID,
                Start_Date: newStartDate,
                End_Date: newEndDate
                }
              : val;
          })
        );
      }
    );
  };

  const DeleteEmpjob = (Job_ID, Employee_ID) => {
    Axios.delete(`http://localhost:3001/DeleteEmpjob/${Job_ID}/${Employee_ID}`).then((response) => {
      setEmpjobList(
        empjobList.filter((val) => {
          return (val.Job_ID != Job_ID) && (val.Employee_ID != Employee_ID) ;
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
                <li class="crumb">Manage Employee Job Table</li>
            </ol>
        </nav>

      <div className="information">
        <lable>Job ID </lable>
        <input type="text" placehoder='insert a exist Job ID' onChange={(event) => {setJobID(event.target.value)}}/>
        <lable>Employee ID </lable>
        <input type="text"  placehoder='insert a exist Employee ID' onChange={(event) => {setEmployeeID(event.target.value)}}/>
        <lable>Supervisor ID </lable>
        <input type="text" placehoder='insert a exist Employee ID' onChange={(event) => {setSupervisorID(event.target.value)}}/>
        <lable>Start Date</lable>
        <input type="date" onChange={(event) => {setStartDate(event.target.value)}}/>
        <lable>End Date</lable>
        <input type="date" onChange={(event) => {setEndDate(event.target.value)}}/>
        <button onClick={addEmpjob}>Add a record</button>
        <div>-----------------------------------------------------------------------------------------------------------------------------------------------------</div>
        <button onClick={getEmpjob}>Display all records </button>
        {empjobList.map((val,key)=>{ return(
          <div className="timesheet">
            <div> 
              <h3>Job ID: {val.Job_ID}</h3>
              <h3>Employee ID: {val.Employee_ID}</h3>
              <h3>Supervisor ID: {val.Supervisor_ID}</h3>
              <h3>Start Date: {val.Start_Date}</h3>
              <h3>End Date: {val.End_Date}</h3>

            <div align="center"><button onClick={() => {DeleteEmpjob(val.Job_ID, val.Employee_ID); }} > Delete </button></div>

            </div>
            <div className="updateBox"> <h2 align="center">Edit this record  </h2>   
                      <div><lable>Supervisor ID </lable>
                      <input type="text" placehoder='insert a exist Employee ID' onChange={(event) => {setsetNewSupervisorID(event.target.value)}}/></div>
                      <div><lable>Start Date</lable>
                      <input type="date" onChange={(event) => {setsetNewStartDate(event.target.value)}}/></div>
                      <div><lable>End Date </lable>
                      <input type="date" onChange={(event) => {setsetNewEndDate(event.target.value)}}/></div>
                      <div align="center"><button className="updateB" onClick={()=>{UpdateEmpjob(val.Job_ID, val.Employee_ID);}}> {" "} Update </button></div>
            </div>   
          </div>

         )
      })}
      <div>---------------------------------------------------------------------------------------------------------------------------------------------</div>
    </div>
  </div>
);
}

export default EmpJob;

