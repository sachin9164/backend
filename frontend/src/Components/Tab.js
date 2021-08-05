import React, { useEffect, useState } from 'react'
import { Tab,Tabs } from "react-bootstrap";
import axios from "axios";
import LineChart from './LineChart';
import Login from './Login';
import Userdetail from './Userdetail';
function MyTab() {
    const[data , setData]=useState({
        heightFeet: '',
        heightInch: '',
        weight: '',
        bmi : "",
        username  : ""
      })

      function handleChange(evt) {
        const value = evt.target.value;
        setData({
          ...data,
          [evt.target.name]: value
        });
      }


      function calculateBMI(){
        if (data.weight && data.heightFeet && data.heightInch){
          // BMI Formula = (WEIGHT[in pounds] / (HEIGHT[in inches] * HEIGHT[in inches])) * 703;
          let INCHES_IN_FEET = 12;
    
          var height = Number(data.heightFeet);
              // convert feet to inches
              height *= INCHES_IN_FEET;
              // add the inches input field
              height += Number(data.heightInch);
    
          let weight = data.weight;
    
          var bmi = (weight / (height * height)) * 703;
              bmi = bmi.toFixed(2);
           setData({
               ...data,bmi,
           })
          return bmi;
        }
      }

      function handleSubmit(){
        calculateBMI()
          
        axios.put(`http://localhost:8080/users/newuser`, { data })
        .then(res => {
          console.log(res);
          console.log(res.data);
        }).catch(()=>{
            console.log("errror")
        })
      }
      function handleReset(){
        
        setData({ heightFeet: '',
        heightInch: '',
        weight: '',
        bmi : "",
        username  : ""})  
        
      }
    
    
      console.log(data)
    
    return (
        <div className="container">
            <br></br>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Enter Details">
      <div className="container">   <Login setdata={setData} handleChange={handleChange} data={data}/ ></div>
      <br></br>
      <button onClick={handleSubmit } className="btn btn-success">Click to Save data</button>
  <button onClick={handleReset } className="btn btn-secondary m-2">Reset</button>
  </Tab>
  <Tab eventKey="profile" title="Visualize">
    <LineChart graphdata={data}/>
  </Tab>
  <Tab eventKey="users" title="Users Data">
    <Userdetail bmi={data.bmi}/>
  </Tab>

</Tabs>

  
        </div>
        
    )
}

export default MyTab;
