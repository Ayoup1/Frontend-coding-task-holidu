import * as actionTypes from "../actions/types";
import { formatProperties } from "../utils";
export const initialState = {
	apartments: [],
	totalCount: 0,
	pageSize: 0,
	query: "null",
	error: false,
	loading: true
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_PROPERTIES_DATA:
			return {
				...state,
				apartments: formatProperties(action.apartments),
				totalCount: action.totalCount || 0,
				pageSize:
					action.apartments && action.apartments.length > 0
						? action.apartments.length
						: 0,
				error: false,
				loading: false
			};
		case actionTypes.SEARCH_PROPERTIES_DATA:
			return {
				...state,
				query: action.text,
				error: false,
				loading: true
			};
		case actionTypes.SET_ERROR:
			return {
				...state,
				error: false,
				loading: false
			};
		default:
			return state;
	}
};

export default reducer;
