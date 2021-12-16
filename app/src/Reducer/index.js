import { combineReducers } from 'redux';

import Services from '../Services';

import paisReducer from './paisReducer';
const reducers = combineReducers({
   ...Services.Reducers,
    paisReducer,
});

export default (state, action) => {
    switch (action.type) {
        case 'USUARIO_LOGOUT':
            state = undefined;
            break;
        default:
            break;
    }
    return reducers(state, action);
}