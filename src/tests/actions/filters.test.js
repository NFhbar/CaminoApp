import {
  setTextFilter,
  sortByAmount
} from '../../actions/filters';

test('should generate set text filter with object text value', () => {
  const text = 'Something in'
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should generate set text filter object with default', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should generate action object for sort by amount', () => {
  expect(sortByAmount()).toEqual({ type: "SORT_BY_AMOUNT"});
});
