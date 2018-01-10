// import React from 'react';
// import {Bar} from 'react-chartjs-2';
// import {Doughnut} from 'react-chartjs-2';
//
// const data = {
//   labels: ['January', 'February', 'March', 'April'],
//   datasets: [
//     {
//       label: 'Hoodie',
//       backgroundColor: 'rgba(255,99,132,0.2)',
//       borderColor: 'rgba(255,99,132,1)',
//       borderWidth: 1,
//       hoverBackgroundColor: 'rgba(255,99,132,0.4)',
//       hoverBorderColor: 'rgba(255,99,132,1)',
//       data: [65, 59, 80, 81]
//     },
//     {
//       label: 'Fitted Cap',
//       backgroundColor: 'rgba(99,172,255,0.2)',
//       borderColor: 'rgba(99,172,255,1)',
//       borderWidth: 1,
//       hoverBackgroundColor: 'rgba(99,172,255,0.4)',
//       hoverBorderColor: 'rgba(99,172,255,1)',
//       data: [45, 89, 10, 43]
//     },
//     {
//       label: 'Bracelet',
//       backgroundColor: 'rgba(99,255,109,0.2)',
//       borderColor: 'rgba(99,255,109,1)',
//       borderWidth: 1,
//       hoverBackgroundColor: 'rgba(99,255,109,0.4)',
//       hoverBorderColor: 'rgba(99,255,109,1)',
//       data: [3, 26, 46, 87]
//     }
//   ]
// };
//
// const data2 = {
// 	labels: [
// 		'Hoodie',
// 		'Bracelet',
// 		'Fitted Cap'
// 	],
// 	datasets: [{
// 		data: [300, 50, 100],
// 		backgroundColor: [
// 		'#FF6384',
// 		'#36A2EB',
// 		'#FFCE56'
// 		],
// 		hoverBackgroundColor: [
// 		'#FF6384',
// 		'#36A2EB',
// 		'#FFCE56'
// 		]
// 	}]
// };
//
// export class ItemPlot extends React.Component {
//   displayName: 'BarExample';
//
//   render() {
//     return (
//       <div id="plotArea">
//         <h2>Total Sales</h2>
//         <Bar
//           data={data}
//           width={100}
//           height={50}
//           options={{
//             maintainAspectRatio: true
//           }}
//         />
//         <h2>Monthly Sales</h2>
//         <Doughnut data={data2} />
//       </div>
//     );
//   }
// };
//
// export default ItemPlot;


import React from 'react';
import { connect } from 'react-redux';
import ItemPlotItem from './ItemPlotItem';
import selectPlotData from '../selectors/plot-data';

export const ItemPlot = (props) => {
    if(props.plots.length === 0) {
      return(
        <div className="alert alert-primary" role="alert">Add some items to plot sales!</div>
      )
    } else {
      return (
        <ItemPlotItem plots={props.plots}/>
      )
    }
};

const mapStateToProps = (state) => {
  return {
    plots: selectPlotData(state.items, state.filters)
  };
};

export default connect(mapStateToProps)(ItemPlot);
