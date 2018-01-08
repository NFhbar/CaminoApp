import React from 'react';
import { connect } from 'react-redux';
import { row, column } from 'reactstrap';
import ItemForm from './ItemForm'
import { addItem } from '../actions/items';

export class AddItemPage extends React.Component {
  onSubmit = (item) => {
    this.props.addItem(item);
    this.props.history.push('/');
  };
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <h1>Add Item</h1>
          <ItemForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
});

export default connect(undefined, mapDispatchToProps)(AddItemPage);
