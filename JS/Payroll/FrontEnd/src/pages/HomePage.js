import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";


var welcome;  
    var date = new Date();  
    var hour = date.getHours();  
    var minute = date.getMinutes();  
    var second = date.getSeconds();  
    if (minute < 10) {  
      minute = "0" + minute;  
    }  
    if (second < 10) {  
      second = "0" + second;  
    }  
    if (hour < 12) {  
      welcome = "Good morning,";  
    } else if (hour < 17) {  
      welcome = "Good afternoon,";  
    } else {  
      welcome = "Good evening,";  
    }  



function HomePage() {
  //var name = "Mike Simth"; //Use SQL to feath the val
  //document.getElementById("name").innerHTML = name;
  var welcome;  
    var date = new Date();  
    var hour = date.getHours();  
    var minute = date.getMinutes();  
    var second = date.getSeconds();  
    if (minute < 10) {  
      minute = "0" + minute;  
    }  
    if (second < 10) {  
      second = "0" + second;  
    }  
    if (hour < 12) {  
      welcome = "Good morning";  
    } else if (hour < 17) {  
      welcome = "Good afternoon";  
    } else {  
      welcome = "Good evening";  
    }  
    //document.getElementById("welcome").innerHTML = welcome;
    
  return (
    <>
      <h1 value={welcome}><span id="welcome"></span>, Emp_name <span id="name"></span></h1>

      <div className="info-box">
        <p>ID: EM1 &nbsp;&nbsp; Tile: XXXX &nbsp;&nbsp; Department: XXXX &nbsp;&nbsp;Supervisor Name: XXXX</p>
        <p className="notes">select * from Empolyee Where Empolyee_Id =="EM1"</p>
       </div>





      <div className="menu-box">
        <h2>MENU</h2>
        <p>
          <Link className="App-link" to="/info"> Edit MyInfo</Link>
        </p>
        <p>
          <Link className="App-link" to="/add"> Clock In/Out</Link>
        </p>
        <div>
          <Link className="App-link" to="/edit"> Generate a Payroll </Link>
        </div>
        <p>&nbsp;&nbsp;</p>
        <div>
            <Link className="App-link" to="/"> PlayGround</Link>
        </div>
       </div>


    </>
  );
}

export default HomePage;
