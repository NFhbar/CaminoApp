// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'amount'
}
//state = filtersReducerDefaultState
export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_SALES':
      return {
        ...state,
        sortBy: 'sales'
      };
    default:
      return state;
  }
};
