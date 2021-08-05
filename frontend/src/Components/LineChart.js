import React from 'react';
import { Line } from 'react-chartjs-2';


const LineChart = (prop) => {
  const data = {
    labels: [null,prop.graphdata.weight, null],
    datasets: [
      {
        label: 'BODY MASS INDEX',
        data: [null,prop.graphdata.bmi,null],
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
  
  console.log(prop.graphdata.weight)
  console.log(prop.graphdata.bmi)
 return ( <>
    <div className='header'>
      <h1 className='title'>OBESITY GRAPH</h1>
      <h3 className='title'>OBESITY GRAPH of {prop.graphdata.username}</h3>
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
  </>)
};

export default LineChart;