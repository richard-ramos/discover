import { getType } from 'typesafe-actions';
import { DomainState, DomainActions } from './types';
import {
  setLoadingAction,
  setErrorMessageAction,
  setNetworkAction,
} from './actions';

/*
 *
 * App reducer
 *
 */

export const initialState: DomainState = {
  loading: true,
  errorMessage: '',
  network: 3,
};

function appReducer(state = initialState, action: DomainActions) {
  switch (action.type) {
    case getType(setNetworkAction):
      return {
        ...state,
        network: action.payload,
      };
    case getType(setLoadingAction):
      return {
        ...state,
        loading: action.payload,
      };
    case getType(setErrorMessageAction):
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
}

export default appReducer;
