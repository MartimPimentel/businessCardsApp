import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {openModal} from '../../components/shared/Modal/modalReducer';

const AsyncContext = React.createContext();

const AsyncProvider = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function asyncActionStartFinish(value) {
    setError(null);
    setLoading(value);
  }
  function asyncActionError(error, modalProps) {
    setLoading(false);
    if (error && modalProps)
      dispatch(
        openModal({
          modalType: 'ErrorModal',
          modalProps: {...modalProps, bodyText: error?.message},
        }),
      );
    setError(error);
  }
  return (
    <AsyncContext.Provider
      value={{
        loading,
        error,
        setLoading: asyncActionStartFinish,
        setError: asyncActionError,
      }}>
      {props.children}
    </AsyncContext.Provider>
  );
};

export {AsyncProvider, AsyncContext};
