import React,{useEffect, useState} from 'react'
import { Line } from 'react-chartjs-2';
function UserLineChart({users,loading}) {

var xaxis ;
var yaxis ;

    xaxis =users.map((user)=>{
     
        return user.weight;
    })
    

    yaxis = users.map((user)=>{
      
        return user.heightFeet ;
    })
    



 
    const data = {
        labels: xaxis,
        datasets: [
          {
            label: 'Weight',
            data:  yaxis ,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      };
      
      const options = {
        scales: {
          yAxes: [
            
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
      
      
     return (
       <>
       {loading ? (<p>Loading</p>):(<>
        <div className='header'>
          <h1 className='title'>OBESITY GRAPH</h1>
          <h3 className='title'>OBESITY GRAPH of</h3>
          <div className='links'>
            <a
              className='btn btn-gh'
              href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js'
            >
               Weight/Height
            </a>
          </div>
        </div>
        <Line data={data} options={options} />
        </>)}
     </>
     )
}

export default UserLineChart
