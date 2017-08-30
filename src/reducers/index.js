import { combineReducers } from 'redux'
import slideMenu from './slide-menu'
import me from './me'

const reducers = combineReducers({
	slideMenu,
	me,
});

export default reducers;
