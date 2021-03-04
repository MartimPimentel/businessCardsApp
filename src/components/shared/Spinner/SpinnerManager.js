import React, {useContext} from 'react';
import {AsyncContext} from '../../../shared/providers/asyncProvider';
import Spinner from './Spinner';

export default function ModalManager() {
  const {loading} = useContext(AsyncContext);
  if (loading) {
    return <Spinner />;
  }
  return null;
}
