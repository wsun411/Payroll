import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";



function AddTimePage() {
  return (
    <>
      <h1>Clock In/Out</h1>
      <p>Emp_FisrtLastName: XXXX &nbsp;&nbsp; Emp_ID: EM1 &nbsp;&nbsp;  </p>
      <p class="notes"> The page onely display one records at a time. </p>

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
                <button class="button" > Add </button>
            </p>
            <p>
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
        </div>




      <footer>
          <Link class="App-link" to="/edit"> Discard </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link className="App-link" to="/"> Back to HomePage</Link>
      </footer>
    </>
  );
}

export default AddTimePage;
