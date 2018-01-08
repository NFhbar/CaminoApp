import React from 'react';
import {Bar} from 'react-chartjs-2';
import {Doughnut} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Hoodie',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: 'Fitted Cap',
      backgroundColor: 'rgba(99,172,255,0.2)',
      borderColor: 'rgba(99,172,255,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(99,172,255,0.4)',
      hoverBorderColor: 'rgba(99,172,255,1)',
      data: [45, 89, 10, 43, 43, 12, 43]
    },
    {
      label: 'Bracelet',
      backgroundColor: 'rgba(99,255,109,0.2)',
      borderColor: 'rgba(99,255,109,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(99,255,109,0.4)',
      hoverBorderColor: 'rgba(99,255,109,1)',
      data: [3, 26, 46, 87, 12, 32, 1]
    }
  ]
};

const data2 = {
	labels: [
		'Hoodie',
		'Bracelet',
		'Fitted Cap'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

export class ItemPlot extends React.Component {
  displayName: 'BarExample';

  render() {
    return (
      <div id="plotArea">
        <h2>Total Sales</h2>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: true
          }}
        />
        <h2>Monthly Sales</h2>
        <Doughnut data={data2} />
      </div>
    );
  }
};

export default ItemPlot;
