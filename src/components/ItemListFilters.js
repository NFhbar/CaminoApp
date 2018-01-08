import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortBySales } from '../actions/filters';

export class ItemListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = (e) => {
    if (e.target.value === 'amount'){
      this.props.sortByAmount();
    } else if (e.target.value === 'sales'){
      this.props.sortBySales();
    }
  };
  render() {
    return (
      <form>
        <div className="form-group">
          <input
            type="text"
            value={this.props.filters.text}
            onChange={this.onTextChange}
            className="form-control"
            placeholder="seacrh"
          />
          <select
            value={this.props.filters.sortBy}
            onChange={this.onSortChange}
            className="form-control"
          >
            <option value="amount">Price</option>
            <option value="sales">Sales</option>
          </select>
        </div>
      </form>
      );
  }
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByAmount: () => dispatch(sortByAmount()),
  sortBySales: () => dispatch(sortBySales())
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemListFilters);
