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
