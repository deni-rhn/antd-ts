import post from './post';
import postUnit from './postUnit';
import {combineReducers} from 'redux';

const index = combineReducers({
    post,
    postUnit
});

export default index;