import { useContext } from 'react';
import { AlertContext, AlertDispatchContext } from '../contexts/AlertContext';

export function useAlert() {
  return useContext(AlertContext);
}

export function useAlertDispatch() {
  return useContext(AlertDispatchContext);
}
