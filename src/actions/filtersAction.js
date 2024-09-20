import { filterTypeActions } from '../reducers/filterReducer';

export const setPriceFilterAction = (price) => ({
  type: filterTypeActions.SET_PRICE,
  payload: price,
});

export const setShapeFilterAction = (shape) => ({
  type: filterTypeActions.SET_SHAPE,
  payload: shape,
});

export const setIsLabDiamondFilterAction = (isLabDiamond) => ({
  type: filterTypeActions.SET_IS_LAB_DIAMOND,
  payload: isLabDiamond,
});

export const setFiltersAction = (filters) => ({
  type: filterTypeActions.SET_FILTERS,
  payload: filters,
});
