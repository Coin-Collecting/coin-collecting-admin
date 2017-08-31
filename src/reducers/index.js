import { combineReducers } from 'redux'
import slideMenu from './slide-menu'
import token from './token'
import me from './me'

const reducers = combineReducers({
	slideMenu,
	token,
	me,
});

export default reducers;
