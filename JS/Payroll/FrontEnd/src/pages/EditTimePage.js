import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
/*
export const EditTimePage = ({exerciseToEdit}) => {
  const [date, setDate] = useState(exerciseToEdit.date);
  const [clockin, setClockin] = useState(exerciseToEdit.clockin);
  const [clockout, setclockout] = useState(exerciseToEdit.clockout);
  
  const history = useHistory();

  const editExercise = async () => {
      const editExcercise = {date, clockin,clockout};
      const response = await fetch (`/exercises/${exerciseToEdit._id}`, {
          method: 'PUT',
          body: JSON.stringify(editExcercise),
          headers: {
              'Content-Type': 'application/json',
          },
      });
      if (response.status === 200) {
          alert("Successfully updated the excercise!");
      } else {
          alert(`Failed to update excercise, status code = ${response.status}`);
      }
      history.push("/");
  };
*/


function EditTimePage(){
    return (
      <>
        <h1>My TimeSheet</h1>
        <p class="notes"> The page should display the multiplt records. </p>
        <p>Emp_FisrtLastName: XXXX &nbsp;&nbsp; Emp_ID: EM1 &nbsp;&nbsp;  </p>
  
        <div>
              <table >
              <thead>
                  <tr>
                      <th>Date</th>
                      <th>Clock In </th>
                      <th>Clock Out</th>
                      <th>Hours</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>
                        <input
                              type="date"
                              placeholder="MM-DD-YY"/>
                      </td>
              
                      <td>
                        <input
                              type="time"
                              name="appt"
                              placeholder="enter a number"/>
                      </td>
                  
                      <td>
                        <input
                              type="time"
                              name="appt"
                              placeholder="enter a number"/>
                      </td>
                      <td>
                        Subtotal
                      </td>
                  </tr>
  
  
              </tbody>
              </table>
              <p>
                  <button class="button" > Update </button>
              </p>
              <p>
                <Link className="App-link" to="/add"> Add a record</Link>
              </p>
              <p>
                  <Link class="link" to="/"> Discard </Link>
              </p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
          </div>
  
  
  
  
        <footer>
            
            <button id="long" > Generate My Payroll </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className="App-link" to="/"> Back to HomePage</Link>
        </footer>
      </>
    );
  }
  
  export default EditTimePage;
  /*
  <form action="/action_page.php">
          <fieldset>
              <legend>Search for a Store </legend>
              <label for="searchZip">Enter a 5-digit ZIP codes:</label>
              <input type="searchZip" id="searchZip" name="searchZip" maxlength="5" pattern="\d{5}"/>
              <div>
                <input type="submit"></input>
              </div>
             <br />
  
          </fieldset>
        </form>
  */
  
  /* send to the servece
  
                          <input
                              type="text"
                              placeholder="enter text"
                              value={name}
                              onChange={e => setName(e.target.value)} />
  */

