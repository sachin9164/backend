import React, { useState ,useEffect} from 'react'
import axios  from 'axios';

function Userdetail(props) {
    const [users,setUsers]=useState()
    const [loading,setLoading]=useState(false)
    useEffect(() => {
        axios.get(`http://localhost:8080/users/`)
        .then(res => {
          const persons = res.data;
          console.log(res.data)
          setUsers(persons)
          setLoading(true)
        })
    }, [props.bmi])
    console.log(users)
    return (
        <div>
        {loading
            ? ( 
                <table class="table table-hover">
      <thead className="thead-dark">
        <tr>
       
          <th scope="col">UserName</th>
          <th scope="col">Weight</th>
          <th scope="col">BMI</th>
          <th scope="col">Height</th>
        </tr>
      </thead>
      <tbody>
          {users.map((user)=>{
              return ( <tr key={user._id}>
                <th scope="row">{user.username}</th>
                <td>{user.weight}</td>
                <td>{user.bmi}</td>
                <td>{user.heightFeet}' {user.heightInch}''</td>
              </tr>)
          })}
        
   
       
      </tbody>
    </table>
            )
            : (<p>Loading</p>)
          }
       </div>
    )
}

export default Userdetail
