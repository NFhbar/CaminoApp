import React from 'react';
import {Bar} from 'react-chartjs-2';
import plotDataFormat from '../selectors/plot-data-format';


const ItemPlotItem = ({plots}) => {
  const labels = { labels: ['January', 'February', 'March', 'April'] };
  const data = { datasets: plotDataFormat(plots)};
  var array = {...labels, ...data};

  return (
    <div id="Plot">
      <h2>Monthly Sales</h2>
      <Bar
        data={array}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: true
        }}
        redraw
      />
    </div>
  )
};

export default ItemPlotItem;
