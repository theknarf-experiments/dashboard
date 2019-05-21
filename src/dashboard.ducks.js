// Actions
const ADD_WIDGET    = 'dashboard/ADD_WIDGET';
const REMOVE_WIDGET = 'dashboard/REMOVE_WIDGET';

// Reducer
const initialState = [
	{i: 'a', x: 0, y: 0, w: 1, h: 2},
	{i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
	{i: 'c', x: 4, y: 0, w: 1, h: 2},
	{i: 'd', x: 0, y: 4, w: 2, h: 2},
];

export default (state = initialState, action = {}) =>
	state;

// Action Creators
export const addWidget    = () => ({ type: ADD_WIDGET });
export const removeWidget = () => ({ type: REMOVE_WIDGET });
