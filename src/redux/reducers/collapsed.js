import { createReducer } from '../../util';
import { handlers } from '../actions/collapsed';
import initState from '../store/initState';

export default createReducer(initState.collapsed, handlers);