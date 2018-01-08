import React from 'react';
import { alert, button } from 'reactstrap';

export default class ItemForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.item ? props.item.description : '',
      note: props.item ? props.item.note : '',
      amount: props.item ? (props.item.amount /100).toString() : '',
      error: ''
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide and item and amount.'}));
    } else {
      this.setState(() =>({ error: ''}));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10)*100,
        note: this.state.note
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error &&
          <div className=
            "alert
            alert-warning
            alert-dismissible
            fade
            show"
            role="alert">
            {this.state.error}
          </div>
        }
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Description"
              autoFocus
              value={this.state.description}
              onChange={this.onDescriptionChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Amount"
              value={this.state.amount}
              onChange={this.onAmountChange}
              className="form-control"
              />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Add a note for your item (optional)"
              value={this.state.note}
              onChange={this.onNoteChange}
              className="form-control"
              >
            </textarea>
          </div>
          <button type="submit" className="btn btn-lg btn-primary">Submit Item</button>
        </form>
      </div>
    )
  }
}
