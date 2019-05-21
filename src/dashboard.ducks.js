// Actions
const ADD_WIDGET    = 'dashboard/ADD_WIDGET';
const REMOVE_WIDGET = 'dashboard/REMOVE_WIDGET';
const LAYOUT_CHANGE = 'dashboard/LAYOUT_CHANGE';

// Reducer
const initialState = [
/*	{i: 'a', x: 0, y: 0, w: 1, h: 2},
	{i: 'b', x: 1, y: 0, w: 3, h: 2},
	{i: 'c', x: 4, y: 0, w: 1, h: 2},
	{i: 'd', x: 0, y: 4, w: 2, h: 2}, */
];

const newI = (state, id_) => {
	const nrOfSameComponents = state
		.filter( ({ id }) => id === id_ );

	const i = (nrOfSameComponents.length || 0) + 1;

	return `${id_}-${i}`;
}

const handleLayoutChange = (state, action) =>
	state.map(itm => {
		const { h, w, x, y } = action.newLayout.find( ({ i }) => i === itm.i );
		return { ...itm, h, w, x, y };
	});

export default (state = initialState, action = {}) =>
	  action.type === ADD_WIDGET
	? [ ...state, { i: newI(state, action.id), id: action.id, x: 0, y: 0, w: 1, h: 1 } ]
	: action.type === LAYOUT_CHANGE
	? handleLayoutChange(state, action)
	: state;

// Action Creators
export const addWidget    = id => ({ type: ADD_WIDGET, id });
export const removeWidget = id => ({ type: REMOVE_WIDGET });
export const layoutChange = newLayout => ({ type: LAYOUT_CHANGE, newLayout });
