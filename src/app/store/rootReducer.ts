import { combineReducers } from 'redux';
import asyncReducer, { IAsyncState } from '../../features/async/asyncReducer';
import authReducer, { IAuthState } from '../../features/auth/authReducer';
import profileReducer, {
  IProfileState,
} from '../../features/profiles/profileReducer';
import modalReducer, { IModalState } from '../common/modals/modalReducer';

export interface IRootState {
  async: IAsyncState;
  auth: IAuthState;
  profile: IProfileState;
  modals: IModalState;
}

const rootReducer = combineReducers({
  async: asyncReducer,
  auth: authReducer,
  profile: profileReducer,
  modals: modalReducer,
});

export default rootReducer;
