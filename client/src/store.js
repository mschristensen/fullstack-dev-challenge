import { createStore } from 'redux';
import rootReducer from './reducer';

const configureStore = initialState => {
  return createStore(
    rootReducer,
    initialState
  );
}
  
export default configureStore;