import { combineReducers } from 'redux';
import autheticationReducer from 'authentication';

const rootReducer = combineReducers({
  authenticated: autheticationReducer
});

export default rootReducer;
