import { createStore } from 'redux';
import rootReducer from './reducer';

const configureStore = preloadedState => {
    return createStore(
        rootReducer,
        preloadedState
    );
}
  
export default configureStore;