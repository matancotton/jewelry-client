import { useQuery } from '@apollo/client';
import React, { useCallback, useEffect, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import { GET_JEWELRY } from '../../queries/jewelry';
import filterReducer, { initialState } from '../../reducers/filterReducer';

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [filtersState, filtersDispatch] = useReducer(filterReducer, initialState);
  const { loading, error, data, refetch } = useQuery(GET_JEWELRY, {
    variables: filtersState,
  });
  const [jewelries, setJewelries] = useState([]);

  const getSingleJewelry = useCallback(
    (id) => {
      return jewelries.find((jewelry) => jewelry._id === id);
    },
    [jewelries]
  );

  useEffect(() => {
    refetch();
  }, [filtersState, refetch]);

  useEffect(() => {
    if (!loading && !error && data) {
      setJewelries(data.jewelries);
    }
  }, [data, loading, error, setJewelries]);

  return (
    <AppContext.Provider
      value={{
        filtersState,
        filtersDispatch,
        jewelries,
        getSingleJewelry,
        loading,
        error,
        refetch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
