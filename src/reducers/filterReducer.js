export const initialState = {
  price: null,
  shape: null,
  isLabDiamond: null,
};

export const filterTypeActions = {
  SET_FILTERS: 'SET_FILTERS',
  SET_PRICE: 'SET_PRICE',
  SET_SHAPE: 'SET_SHAPE',
  SET_IS_LAB_DIAMOND: 'SET_IS_LAB_DIAMOND',
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case filterTypeActions.SET_FILTERS:
      return { ...state, ...action.payload };
    case filterTypeActions.SET_PRICE:
      return { ...state, price: action.payload };
    case filterTypeActions.SET_SHAPE:
      return { ...state, shape: action.payload };
    case filterTypeActions.SET_IS_LAB_DIAMOND:
      return { ...state, isLabDiamond: action.payload };
    default:
      return state;
  }
}
