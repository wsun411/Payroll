import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";


function InfoPage() {
  return (
    <body>
<h2>My Info</h2>
 <p className="notes">This page send request to the MySql server to update a records</p>
<div class="container">

<form class="well form-horizontal" action=" " method="post"  id="contact_form">
<fieldset>


<legend align="left">&nbsp;&nbsp;First Last Name &nbsp;&nbsp; </legend>


 <div class="form-group">
<label class="col-md-4 control-label">E-Mail</label>  
<div class="col-md-4 inputGroupContainer">
<div class="input-group">
    <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
<input name="email" placeholder="E-Mail Address" class="form-control"  type="text"/>
</div>
</div>
</div>



   
<div class="form-group">
<label class="col-md-4 control-label">Phone #</label>  
<div class="col-md-4 inputGroupContainer">
<div class="input-group">
    <span class="input-group-addon"><i class="glyphicon glyphicon-earphone"></i></span>
<input name="phone" placeholder="(845)555-1212" class="form-control" type="text"/>
</div>
</div>
</div>


  
<div class="form-group">
<label class="col-md-4 control-label">Address</label>  
<div class="col-md-4 inputGroupContainer">
<div class="input-group">
    <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
<input name="address" placeholder="Address" class="form-control" type="text"/>
</div>
</div>
</div>



<div class="form-group">
<label class="col-md-4 control-label">City</label>  
<div class="col-md-4 inputGroupContainer">
<div class="input-group">
    <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
<input name="city" placeholder="city" class="form-control"  type="text"/>
</div>
</div>
</div>



<div class="form-group"> 
<label class="col-md-4 control-label">State</label>
<div class="col-md-4 selectContainer">
<div class="input-group">
    <span class="input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
<select name="state" class="form-control selectpicker" >
  <option value=" " >Please select your state</option>
  <option>Alabama</option>
  <option>Alaska</option>
  <option >Arizona</option>
  <option >Arkansas</option>
  <option >California</option>
  <option >Colorado</option>
  <option >Connecticut</option>
  <option >Delaware</option>
  <option >District of Columbia</option>
  <option> Florida</option>
  <option >Georgia</option>
  <option >Hawaii</option>
  <option >daho</option>
  <option >Illinois</option>
  <option >Indiana</option>
  <option >Iowa</option>
  <option> Kansas</option>
  <option >Kentucky</option>
  <option >Louisiana</option>
  <option>Maine</option>
  <option >Maryland</option>
  <option> Mass</option>
  <option >Michigan</option>
  <option >Minnesota</option>
  <option>Mississippi</option>
  <option>Missouri</option>
  <option>Montana</option>
  <option>Nebraska</option>
  <option>Nevada</option>
  <option>New Hampshire</option>
  <option>New Jersey</option>
  <option>New Mexico</option>
  <option>New York</option>
  <option>North Carolina</option>
  <option>North Dakota</option>
  <option>Ohio</option>
  <option>Oklahoma</option>
  <option>Oregon</option>
  <option>Pennsylvania</option>
  <option>Rhode Island</option>
  <option>South Carolina</option>
  <option>South Dakota</option>
  <option>Tennessee</option>
  <option>Texas</option>
  <option> Uttah</option>
  <option>Vermont</option>
  <option>Virginia</option>
  <option >Washington</option>
  <option >West Virginia</option>
  <option>Wisconsin</option>
  <option >Wyoming</option>
</select>
</div>
</div>
</div>



<div class="form-group">
<label class="col-md-4 control-label">Zip Code</label>  
<div class="col-md-4 inputGroupContainer">
<div class="input-group">
    <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
<input name="zip" placeholder="Zip Code" class="form-control"  type="text"/>
</div>
</div>
</div>



<div class="form-group">
<label class="col-md-4 control-label"></label>
<div class="col-md-4">
<button type="submit" class="btn btn-warning" >Update <span class="glyphicon glyphicon-send"></span></button>
</div>
</div>

</fieldset>
</form>
</div>



  
        <footer>
          <Link className="App-link" to="/edit"> Check my  Timesheet</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link className="App-link" to="/"> Discard</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link className="App-link" to="/"> Back to HomePage</Link>
        </footer>
        
        
    </body>
  );
}
export default InfoPage;
//<GroceryTable items={items}></GroceryTable>
