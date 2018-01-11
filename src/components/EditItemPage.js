import React from 'react';
import { connect } from 'react-redux';
import { row, column } from 'reactstrap';
import ItemForm from './ItemForm';
import { editItem, startRemoveItem } from '../actions/items';

export class EditItemPage extends React.Component {
  onSubmit = (item) => {
    this.props.editItem(this.props.item.id, item);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveItem({ id: this.props.item.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div className="row" id="edit-item-page">
        <div className="col-sm-12">
          <ItemForm
            item={this.props.item}
            onSubmit={this.onSubmit}
          />
          <button type="submit" id="btn-remove" className="btn btn-md btn-danger" onClick={this.onRemove}>Remove Item</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  item: state.items.find((item) => item.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editItem: (id, item) => dispatch(editItem(id, item)),
  startRemoveItem: (data) => dispatch(startRemoveItem(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditItemPage);
