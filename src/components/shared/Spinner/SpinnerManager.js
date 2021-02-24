import React from 'react';
import {useSelector} from 'react-redux';
import Spinner from './Spinner';

export default function ModalManager() {
  const {loading} = useSelector((state) => state.async);
  if (loading) {
    return <Spinner />;
  }
  return null;
}
