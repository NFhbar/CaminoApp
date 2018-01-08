import moment from 'moment';

export default [{
  id: '1',
  description: 'Pant',
  note: '',
  amount: 500,
  createdAt: 0
}, {
  id: '2',
  description: 'Shirt',
  note: '',
  amount: 1000,
  createdAt: moment(0).subtract(4,'days').valueOf()
}, {
  id: '3',
  description: 'Coat',
  note: '',
  amount: 1500,
  createdAt: moment(0).add(4,'days').valueOf()
}];
