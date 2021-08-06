import React, { useEffect, useState } from 'react'
import { Tab,Tabs } from "react-bootstrap";
import axios from "axios";
import Login from './Login';
import Userdetail from './Userdetail';
import UserLineChart from './UserLineChart';
function MyTab() {
    const[data , setData]=useState({
        heightFeet: '',
        heightInch: '',
        weight: '',
        bmi : "",
        username  : ""
      })

      const [users,setUsers]=useState([])
      const [loading,setLoading]=useState(true)
      const [refresh,setRefresh]=useState(1)

      useEffect(() => {
        axios.get(`http://localhost:8080/users/`)
        .then(res => {
          const persons = res.data;
          console.log(res.data)
          setUsers(res.data)
        
          setLoading(false)
        }).catch((error)=>{
            console.log(error)
        })
    }, [refresh])
   

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
          console.log(data)
        axios.put(`http://localhost:8080/users/newuser`, { data })
        .then(res => {
          //console.log(res);
          //console.log(res.data);
          setRefresh(refresh+1)
          alert("User details added to DB!")
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
    
  
    
    return (
        <div className="container">
            <br></br>
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Enter Details">
      <div className="container">   <Login setdata={setData} handleChange={handleChange} data={data}/ ></div>
      <br></br>
      <button onClick={handleSubmit } className="btn btn-success">Click to Save data</button>
  <button onClick={handleReset } className="btn btn-secondary m-2">Reset</button>
  </Tab>

  <Tab eventKey="users" title="Users Data">
    <Userdetail users={users} loading={loading}/>
  </Tab>
  <Tab eventKey="usersgraph" title="Users Graph">
      <UserLineChart users={users} loading={loading}></UserLineChart>
  </Tab>
</Tabs>

  
        </div>
        
    )
}

export default MyTab;
