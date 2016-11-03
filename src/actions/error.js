import { ERROR_MESSAGE } from './types';

export const setErrorMessage = (message = null) => {
  return {
    type: ERROR_MESSAGE,
    payload: message
  };
};
