import React from 'react'

function Userdetail({loading,users}) {

    return (
        <div>
        {loading
            ? ( 
               <p>Loading</p>
            )
            : ( <table class="table table-hover">
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
          </table>)
          }
       </div>
    )
}

export default Userdetail
