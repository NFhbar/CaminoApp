import selectItems from '../../selectors/items';
import items from '../fixtures/items';

test('should filter by text value', () => {
  const filters = {
    text: 'a',
    sortBy: 'amount',
  };
  const result = selectItems(items, filters);
  expect(result).toEqual([ items[2], items[0] ])
});

test('should sort by amount', () => {
  const filters = {
    text:'',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectItems(items, filters);
  expect(result).toEqual([ items[2], items[1], items[0] ]);
});
